import { Dispatch, ReactNode, SetStateAction } from 'react'

export type UserContextData = {
  userId: string
  setUserId: Dispatch<SetStateAction<string>>
  generateNewID: () => void
}

export type UserProviderProps = {
  children: ReactNode
}

export type UserData = {
  id: string
}
