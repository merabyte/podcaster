import { useState, useEffect } from 'react'
import { request, setCacheData, getCacheData } from '../utils/common'

function useRequest({ url, options, cache, mapper }) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const abortController = new AbortController()

    const getFromAPI = async () => {
      setLoading(true)

      try {
        const requestData = await request(url, { ...options, signal: abortController.signal })
        const newData = mapper ? mapper(requestData) : requestData

        if (cache) setCacheData({ ...cache, value: newData })

        setLoading(false)
        setData(newData)
      } catch (err) {
        if (!abortController.signal.aborted) {
          console.error(`Request to ${url} failed...`, err)
          setError(err)
          setLoading(false)
        }
      }
    }

    const cacheData = cache && getCacheData(cache)

    if (cacheData) setData(cacheData)
    else getFromAPI()

    return () => abortController.abort()
  }, [url, options, cache])

  return { data, error, loading }
}

export default useRequest
