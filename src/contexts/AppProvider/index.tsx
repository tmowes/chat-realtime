import { ContactsProvider } from '../ContactsProvider'
import { ConversationsProvider } from '../ConversationsProvider'
import { UserProvider } from '../UserProvider'
import { AppProviderProps } from './types'

export const AppProvider = ({ children }: AppProviderProps) => (
  <UserProvider>
    <ContactsProvider>
      <ConversationsProvider>{children}</ConversationsProvider>
    </ContactsProvider>
  </UserProvider>
)
