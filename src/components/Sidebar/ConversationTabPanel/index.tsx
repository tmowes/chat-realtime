/* eslint-disable react/no-array-index-key */
import { Box, Button, Divider, Flex } from '@chakra-ui/react'

import { useConversations } from '~/contexts'

import { ConversationModal } from './ConversationModal'

export const ConversationTabPanel = () => {
  const {
    conversations,
    activeConversation,
    setActiveConversation,
  } = useConversations()

  return (
    <Flex direction="column" h="100%" w="100%" py="1">
      {conversations.map(({ recipients }, index) => (
        <Box key={`conversation:${index}`}>
          <Button
            colorScheme="blackAlpha"
            fontSize="sm"
            isActive={activeConversation === index}
            onClick={() => setActiveConversation(index)}
          >
            {recipients.map(recipient => recipient.name).join(', ')}
          </Button>
          <Divider my="1" />
        </Box>
      ))}
      <ConversationModal />
    </Flex>
  )
}
