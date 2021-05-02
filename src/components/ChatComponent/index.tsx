import { Flex, Text } from '@chakra-ui/react'

import { useConversations } from '~/contexts'

import { ChatInputForm } from './ChatInputForm'

export const ChatComponent = () => {
  const { selectedConversation } = useConversations()
  return (
    <Flex flex="1" direction="column">
      <Text>Chat Component</Text>
      <Flex
        flex="1"
        overflow="auto"
        css={{
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            width: '8px',
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#565964',
            borderRadius: '4px',
          },
        }}
      >
        <Text>{JSON.stringify(selectedConversation.messages)}</Text>
      </Flex>
      <ChatInputForm />
    </Flex>
  )
}
