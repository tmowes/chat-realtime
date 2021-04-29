import { Flex } from '@chakra-ui/react'

import { ConversationModal } from './ConversationModal'

export const ConversationTabPanel = () => (
  <Flex direction="column" h="100%" w="100%" p="1">
    <ConversationModal />
  </Flex>
)
