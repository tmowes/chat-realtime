import { ContactsProvider } from '../ContactsProvider'
import { UserProvider } from '../UserProvider'
import { AppProviderProps } from './types'

export const AppProvider = ({ children }: AppProviderProps) => (
  <UserProvider>
    <ContactsProvider>{children}</ContactsProvider>
  </UserProvider>
)
