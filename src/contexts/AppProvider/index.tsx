import { UserProvider } from '../UserProvider'
import { AppProviderProps } from './types'

export const AppProvider = ({ children }: AppProviderProps) => (
  <UserProvider>{children}</UserProvider>
)
