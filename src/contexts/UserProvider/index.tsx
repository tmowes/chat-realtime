import { createContext, useContext } from 'react'

import { v4 as uuidV4 } from 'uuid'

import { useLocalStorage } from '../LocalStorageProvider/useLocalStorage'
import { UserContextData, UserProviderProps } from './types'

export const UserContext = createContext({} as UserContextData)

export const UserProvider = (props: UserProviderProps) => {
  const { children } = props
  const [userId, setUserId] = useLocalStorage('id', '')

  const generateNewID = () => {
    setUserId(uuidV4())
  }

  const provideValues = {
    userId,
    setUserId,
    generateNewID,
  }

  return (
    <UserContext.Provider value={provideValues}>
      {children}
    </UserContext.Provider>
  )
}

export function useUser(): UserContextData {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
