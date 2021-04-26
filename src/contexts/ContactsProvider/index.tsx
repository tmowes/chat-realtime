import { createContext, useContext } from 'react'

import { useLocalStorage } from '../LocalStorageProvider/useLocalStorage'
import {
  ContactsContextData,
  ContactsProviderProps,
  CreateContactFormData,
} from './types'

export const ContactsContext = createContext({} as ContactsContextData)

export const ContactsProvider = (props: ContactsProviderProps) => {
  const { children } = props
  const [contacts, setContacts] = useLocalStorage('contacts', [])

  const createContact = ({ id, name }: CreateContactFormData) => {
    setContacts(prev => [...prev, { id, name }])
  }

  const provideValues = {
    contacts,
    setContacts,
    createContact,
  }

  return (
    <ContactsContext.Provider value={provideValues}>
      {children}
    </ContactsContext.Provider>
  )
}

export function useContacts(): ContactsContextData {
  const context = useContext(ContactsContext)
  if (!context) {
    throw new Error('useContacts must be used within a ContactsProvider')
  }
  return context
}
