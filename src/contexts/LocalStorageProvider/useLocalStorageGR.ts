import { useEffect, useState } from 'react'

import isEqual from 'lodash.isequal'
import { usePrevious } from '@chakra-ui/react'

const STORAGE_PREFIX = 'grsoares-socket-io'

export const useLocalStorageGR = <T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] => {
  const STORAGE_PREFIXED_KEY = `${STORAGE_PREFIX}:${key}`

  const [storedValue, setStoredValue] = useState<T>(initialValue)

  const prevInitialValue = usePrevious(initialValue)

  useEffect(() => {
    if (!isEqual(initialValue, prevInitialValue)) {
      const item = window.localStorage.getItem(STORAGE_PREFIXED_KEY)
      setStoredValue(item ? JSON.parse(item) : initialValue)
    }
  }, [STORAGE_PREFIXED_KEY, initialValue, prevInitialValue])

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      window?.localStorage.setItem(
        STORAGE_PREFIXED_KEY,
        JSON.stringify(valueToStore)
      )
    } catch (error) {
      console.log(error)
    }
  }
  return [storedValue, setValue]
}
