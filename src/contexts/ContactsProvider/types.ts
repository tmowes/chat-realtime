import { Dispatch, ReactNode, SetStateAction } from 'react'

export type ContactsContextData = {
  contacts: Contact[]
  setContacts: Dispatch<SetStateAction<Contact[]>>
  createContact: ({ id, name }: CreateContactFormData) => void
}

export type ContactsProviderProps = {
  children: ReactNode
}

type Contact = {
  id: string
  name: string
}

export type UserData = {
  id: string
}

export type CreateContactFormData = {
  id: string
  name: string
}

export type CreateConversationFormData = {
  id: string
  name: string
}
