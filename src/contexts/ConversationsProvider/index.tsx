import { useCallback, useEffect } from 'react'
import { createContext, useContext, useState } from 'react'

import { compareArrayEquality } from '~/utils/compareArrayEquality'

import { useContacts } from '../ContactsProvider'
import { useLocalStorage } from '../LocalStorageProvider/useLocalStorage'
import { useUser } from '../UserProvider'
import {
  AddMessageToConversationDTO,
  Conversation,
  ConversationsContextData,
  ConversationsProviderProps,
  CreateConversationFormData,
  SendMessageFormData,
  FormattedConversation,
} from './types'

export const ConversationsContext = createContext(
  {} as ConversationsContextData
)

export const ConversationsProvider = (props: ConversationsProviderProps) => {
  const { children } = props
  const { userId } = useUser()
  const { contacts } = useContacts()
  const [conversations, setConversations] = useLocalStorage(
    'conversations',
    [] as Conversation[]
  )

  const [loadedConversation, setLoadedConversation] = useState<
    FormattedConversation[]
  >([])

  const [activeConversation, setActiveConversation] = useState(0)

  const createConversation = ({ recipients }: CreateConversationFormData) => {
    setConversations(prev => [...prev, { recipients, messages: [] }])
  }

  const sendMessage = ({ recipients, text }: SendMessageFormData) => {
    addMessageToConversation({ recipients, text, senderId: userId })
  }

  const addMessageToConversation = useCallback(
    ({ recipients, text, senderId }: AddMessageToConversationDTO) => {
      console.log({ recipients, text, senderId })
      setConversations(prev => {
        let conversationMatch = false
        const newMessage = { senderId, text }

        const addConversations = prev.map(conversation => {
          if (compareArrayEquality(conversation.recipients, recipients)) {
            conversationMatch = true
            return {
              ...conversation,
              messages: [...conversation.messages, newMessage],
            }
          }
          return conversation
        })
        if (conversationMatch) {
          return addConversations
        }
        return [...prev, { recipients, messages: [newMessage] }]
      })
    },
    [setConversations]
  )

  useEffect(() => {
    const formattedConversations = conversations.map(conversation => {
      const { recipients } = conversation

      const messages = conversation.messages.map(message => {
        const contact = contacts.find(({ id }) => id === message.senderId)
        const name = (contact && contact.name) || message.senderId
        const fromMe = userId === message.senderId
        return { ...message, senderName: name, fromMe }
      })

      return { messages, recipients }
    })
    setLoadedConversation(formattedConversations)
  }, [contacts, conversations, userId])

  const provideValues: ConversationsContextData = {
    conversations: loadedConversation,
    createConversation,
    activeConversation,
    setActiveConversation,
    sendMessage,
    selectedConversation: loadedConversation[activeConversation],
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
