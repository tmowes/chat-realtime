import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const STORAGE_PREFIX = 'julius-socket-io'

export const useLocalStorage = <TypeState>(
  key: string,
  initialValue: TypeState
): [TypeState, Dispatch<SetStateAction<TypeState>>] => {
  const STORAGE_PREFIXED_KEY = `${STORAGE_PREFIX}:${key}`
  const [loadingStorage, setLoadingStorage] = useState(true)

  // eslint-disable-next-line consistent-return
  const [value, setValue] = useState<TypeState>(() => {
    if (typeof window !== 'undefined') {
      const jsonValue = window.localStorage.getItem(STORAGE_PREFIXED_KEY)
      if (jsonValue) {
        setLoadingStorage(false)
        return JSON.parse(jsonValue)
      }
      if (typeof initialValue === 'function') {
        setLoadingStorage(false)
        return initialValue()
      }
      setLoadingStorage(false)
      return initialValue
    }
  })

  useEffect(() => {
    if (!loadingStorage && typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_PREFIXED_KEY, JSON.stringify(value))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [STORAGE_PREFIXED_KEY, value])

  return [value, setValue]
}
