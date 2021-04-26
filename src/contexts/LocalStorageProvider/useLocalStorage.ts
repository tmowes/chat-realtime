import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const STORAGE_PREFIX = 'julius-socket-io'

export const useLocalStorage = <TypeState>(
  key: string,
  initialValue: TypeState
): [TypeState, Dispatch<SetStateAction<TypeState>>] => {
  const STORAGE_PREFIXED_KEY = `${STORAGE_PREFIX}:${key}`
  const [loadingStorage, setLoadingStorage] = useState(true)

  const [value, setValue] = useState<TypeState>(() => {
    if (typeof window !== 'undefined') {
      console.log('useEffect (typeof window !== undefine)')
      const jsonValue = window.localStorage.getItem(STORAGE_PREFIXED_KEY)
      if (!jsonValue) {
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
    setLoadingStorage(true)
  })

  // const [value, setValue] = useState<TypeState>()

  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     const jsonValue =
  //       !!window && window.localStorage.getItem(STORAGE_PREFIXED_KEY)
  //     if (!jsonValue) {
  //       setValue(JSON.parse(jsonValue))
  //       return
  //     }
  //     if (typeof initialValue === 'function') {
  //       setValue(initialValue())
  //       return
  //     }
  //     setValue(initialValue)
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [STORAGE_PREFIXED_KEY])

  useEffect(() => {
    if (!loadingStorage && typeof window !== 'undefined') {
      console.log('setItem (typeof window !== undefine)', loadingStorage)
      localStorage.setItem(STORAGE_PREFIXED_KEY, JSON.stringify(value))
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [STORAGE_PREFIXED_KEY, value])

  return [value, setValue]
}
