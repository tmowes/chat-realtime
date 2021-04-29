import { useState } from 'react'

import {
  Button,
  Checkbox,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'

import { useContacts } from '~/contexts'

export const ConversationModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [checkedItems, setCheckedItems] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { contacts } = useContacts()

  const handleNewConversation = async () => {
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))

    console.log('New Contact', {})
    setIsSubmitting(false)

    onClose()
  }

  const handleCheckBoxChange = (contactId: string) => {
    setCheckedItems(prev => {
      if (prev.includes(contactId)) {
        return prev.filter(prevId => contactId !== prevId)
      }
      return [...prev, contactId]
    })
  }

  return (
    <>
      <Button w="100%" colorScheme="orange" mt="auto" mb="8" onClick={onOpen}>
        Create new Conversation
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent bg="gray.500">
          <ModalHeader>Add a new conversation</ModalHeader>
          <ModalCloseButton />
          <Flex as="form" flexDir="column" onSubmit={handleNewConversation}>
            <ModalBody>
              <Stack spacing="2">
                {contacts.map(({ id, name }) => (
                  <Checkbox
                    key={id}
                    colorScheme="orange"
                    onChange={() => handleCheckBoxChange(id)}
                  >
                    {name}
                  </Checkbox>
                ))}
              </Stack>
            </ModalBody>
            <ModalFooter>
              <Button
                isLoading={isSubmitting}
                type="submit"
                colorScheme="orange"
                mr="auto"
              >
                Create conversation
              </Button>
            </ModalFooter>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  )
}
