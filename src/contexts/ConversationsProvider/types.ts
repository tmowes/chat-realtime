import { Dispatch, ReactNode, SetStateAction } from 'react'

export type ConversationsContextData = {
  conversations: FormattedConversation[]
  createConversation: ({ recipients }: CreateConversationFormData) => void
  activeConversation: number
  setActiveConversation: Dispatch<SetStateAction<number>>
  selectedConversation: Conversation
}

export type ConversationsProviderProps = {
  children: ReactNode
}

export type Conversation = {
  recipients: Recipient[]
  messages: string[]
}

export type CreateConversationFormData = {
  recipients: Recipient[]
}

type FormattedConversation = {
  recipients: Recipient[]
  messages: string[]
}

type Recipient = {
  id: string
  name: string
}

export type NewMessageFormData = {
  message: string
}
