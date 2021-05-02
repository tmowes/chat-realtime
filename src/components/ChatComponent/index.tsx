/* eslint-disable react/no-array-index-key */
import { useCallback } from 'react'

import { Flex, Text, VStack } from '@chakra-ui/react'

import { useConversations } from '~/contexts'

import { ChatInputForm } from './ChatInputForm'

export const ChatComponent = () => {
  const { selectedConversation } = useConversations()
  const setRef = useCallback(node => {
    if (node) {
      node.scrollIntoView({ smooth: true })
    }
  }, [])
  return (
    <Flex flex="1" direction="column" m="2">
      <Text pl="2">
        {`you are chatting with ${selectedConversation.recipients
          .map(({ name }) => name)
          .join(' and ')}`}
      </Text>
      <Flex
        flex="1"
        overflow="auto"
        direction="column"
        mx="2"
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
        {selectedConversation.messages.map(
          ({ fromMe, senderName, text }, index) => {
            const last = selectedConversation.messages.length - 1 === index
            return (
              <VStack
                key={index}
                ref={last ? setRef : null}
                direction="column"
                px="4"
                py="1"
                my="1"
                borderWidth="1px"
                borderColor="orange.500"
                borderRadius="8"
                bg={fromMe ? 'orange.500' : 'gray.800'}
                mr={fromMe ? '2' : 'auto'}
                ml={!fromMe ? '0' : 'auto'}
                alignItems={!fromMe ? 'flex-start' : 'flex-end'}
              >
                <Text color="white" lineHeight="1" fontSize="md">
                  {text}
                </Text>
                <Text color="white" lineHeight="1" fontSize="sm">
                  {fromMe ? 'You' : senderName}
                </Text>
              </VStack>
            )
          }
        )}
      </Flex>
      <ChatInputForm />
    </Flex>
  )
}
