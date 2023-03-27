import { CORS_URL } from './config'

async function request(url, options) {
  const apiUrl = CORS_URL ? CORS_URL + encodeURIComponent(url) : url
  let data = null

  try {
    const response = await fetch(apiUrl, options)
    data = await response.json()
  } catch (err) {
    throw err
  }

  return CORS_URL ? JSON.parse(data?.contents || null) : data
}

async function apiRequest(url, options) {
  const { cache, mapper, ...fetchOptions } = options

  const cacheData = cache && getCacheData(cache)
  if (cacheData) return cacheData

  const requestData = await request(url, fetchOptions)
  const data = mapper ? mapper(requestData) : requestData

  if (cache) setCacheData({ ...cache, value: data })

  return data
}

function setCacheData(cacheData) {
  const { name, value, expiration, json } = cacheData
  const expirationTS = Date.now() + expiration
  const newValue = json ? JSON.stringify(value) : value

  localStorage.setItem(name, newValue)
  localStorage.setItem(name + ':exp', expirationTS)
}

function getCacheData(cacheData) {
  const { name, json } = cacheData
  const expirationTS = Number(localStorage.getItem(name + ':exp')) || 0

  if (new Date(expirationTS) < new Date()) {
    localStorage.removeItem(name)
    localStorage.removeItem(name + ':exp')
    return null
  }

  const value = localStorage.getItem(name)

  return json ? JSON.parse(value) : value
}

const formatTimeFromMilis = milis => {
  const durationHoursFloat = milis / 1000 / 60 / 60
  const durationHours = Math.floor(durationHoursFloat)
  const remainingMinutes = durationHoursFloat - durationHours
  const durationMinutesFloat = remainingMinutes * 60
  const durationMinutes = Math.floor(durationMinutesFloat)
  const remainingSeconds = durationMinutesFloat - durationMinutes
  const durationSeconds = Math.round(remainingSeconds * 60)

  return (
    `${durationHours ? durationHours + ':' : ''}` +
    `${durationMinutes}`.padStart(2, '0') +
    ':' +
    `${durationSeconds}`.padStart(2, '0')
  )
}

export { request, apiRequest, setCacheData, getCacheData, formatTimeFromMilis }
