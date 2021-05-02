import { Dispatch, ReactNode, SetStateAction } from 'react'

export type ConversationsContextData = {
  conversations: FormattedConversation[]
  createConversation: ({ recipients }: CreateConversationFormData) => void
  activeConversation: number
  sendMessage: ({ recipients, text }: SendMessageFormData) => void
  setActiveConversation: Dispatch<SetStateAction<number>>
  selectedConversation: FormattedConversation
}

export type ConversationsProviderProps = {
  children: ReactNode
}

export type Conversation = {
  recipients: Recipient[]
  messages: Message[]
}

export type CreateConversationFormData = {
  recipients: Recipient[]
}

export type FormattedConversation = {
  recipients: Recipient[]
  messages: FormattedMessage[]
}

export type Recipient = {
  id: string
  name: string
}

export type NewMessageFormData = {
  text: string
}

export type SendMessageFormData = {
  recipients: Recipient[]
  text: string
}
export type AddMessageToConversationDTO = {
  recipients: Recipient[]
  text: string
  senderId: string
}

export type Message = {
  senderId: string
  text: string
}

export type FormattedMessage = {
  senderName: string
  text: string
  fromMe: boolean
  senderId: string
}
