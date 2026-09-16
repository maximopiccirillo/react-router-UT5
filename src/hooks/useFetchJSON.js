import { useState, useEffect } from 'react'

export function useFetchJSON(resource, options = undefined) {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fun = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(resource, options)
        if (!response.ok) {
          setError(new Error(
            `${options?.method ?? 'GET'} ${resource} failed with ${response.status} ${response.statusText}!`,
          ))
        } else {
          const jsonData = await response.json()
          setData(jsonData)
        }
      } catch (err) {
        setError(err)
      } finally {
        setIsLoading(false)
      }
    }
    fun()
  }, [resource, options])

  return { data, isLoading, error }
}
