import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react'

import { ContactTabPanel } from './ContactTabPanel'
import { ConversationTabPanel } from './ConversationTabPanel'
import { SideBarProps } from './types'

export const Sidebar = (props: SideBarProps) => {
  const { id } = props
  return (
    <Flex
      bg="gray.500"
      w="16rem"
      h="100vh"
      direction="column"
      align="center"
      justify="space-between"
      overflow="hidden"
    >
      <Tabs
        isFitted
        variant="enclosed"
        w="100%"
        h="100%"
        borderBottomWidth="2px"
        borderBottomColor="grayAlpha.500"
      >
        <TabList>
          <Tab _selected={{ bg: 'orange.500' }}>Conversations</Tab>
          <Tab _selected={{ bg: 'orange.500' }}>Contacts</Tab>
        </TabList>
        <TabPanels h="100%">
          <TabPanel h="100%">
            <ConversationTabPanel />
          </TabPanel>
          <TabPanel h="100%">
            <ContactTabPanel />
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Flex direction="column" w="100%" align="center" p="1" my="2">
        <Text fontSize="0.68rem" lineHeight="1" mb="1">
          {`ID: ${id}`}
        </Text>
      </Flex>
    </Flex>
  )
}
