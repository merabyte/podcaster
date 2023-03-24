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

export { request, setCacheData, getCacheData }
