import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { v4 as uuidV4 } from 'uuid'

const STORAGE_PREFIX = 'julius-socket-io'

export const useLocalStorage = (
  key: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  initialValue?: any
): [string, Dispatch<SetStateAction<string>>] => {
  const STORAGE_PREFIXED_KEY = `${STORAGE_PREFIX}:${key}`

  const [value, setValue] = useState('')

  useEffect(() => {
    const jsonValue = localStorage.getItem(STORAGE_PREFIXED_KEY)
    if (jsonValue !== null || typeof jsonValue !== 'undefined') {
      console.log('ENTROU NO NULL', { jsonValue })
      return setValue(JSON.parse(jsonValue))
    }
    if (typeof initialValue === 'function') {
      return setValue(initialValue(uuidV4()))
    }
    return setValue(initialValue)
  }, [STORAGE_PREFIXED_KEY, initialValue])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_PREFIXED_KEY, JSON.stringify(value))
    }
  }, [STORAGE_PREFIXED_KEY, value])

  return [value, setValue]
}
