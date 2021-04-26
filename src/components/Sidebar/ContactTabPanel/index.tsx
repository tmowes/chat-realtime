import { Flex, Text } from '@chakra-ui/react'

import { useContacts } from '~/contexts'

import { ContactModal } from './ContactModal'

export const ContactTabPanel = () => {
  const { contacts } = useContacts()

  return (
    <Flex direction="column" h="100%" w="100%" p="1">
      {contacts.map(({ id, name }) => (
        <Text key={id}>{name}</Text>
      ))}
      <ContactModal />
    </Flex>
  )
}
