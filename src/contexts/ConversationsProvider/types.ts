import { ReactNode } from 'react'

export type ConversationsContextData = {
  conversations: Conversation[]
  createConversation: ({ recipients }: CreateConversationFormData) => void
}

export type ConversationsProviderProps = {
  children: ReactNode
}

export type Conversation = {
  recipients: string[]
  messages: string[]
}

export type CreateConversationFormData = {
  recipients: string[]
}
