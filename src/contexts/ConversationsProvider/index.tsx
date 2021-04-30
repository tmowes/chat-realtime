import { createContext, useContext } from 'react'

import { useLocalStorage } from '../LocalStorageProvider/useLocalStorage'
import {
  Conversation,
  ConversationsContextData,
  ConversationsProviderProps,
  CreateConversationFormData,
} from './types'

export const ConversationsContext = createContext(
  {} as ConversationsContextData
)

export const ConversationsProvider = (props: ConversationsProviderProps) => {
  const { children } = props
  const [conversations, setConversations] = useLocalStorage(
    'conversations',
    [] as Conversation[]
  )

  const createConversation = ({ recipients }: CreateConversationFormData) => {
    setConversations(prev => [...prev, { recipients, messages: [] }])
  }

  const provideValues = {
    conversations,
    createConversation,
  }

  return (
    <ConversationsContext.Provider value={provideValues}>
      {children}
    </ConversationsContext.Provider>
  )
}

export function useConversations(): ConversationsContextData {
  const context = useContext(ConversationsContext)
  if (!context) {
    throw new Error(
      'useConversations must be used within a ConversationsProvider'
    )
  }
  return context
}
