import { FormEvent, useState } from 'react'

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

import { useContacts, useConversations } from '~/contexts'

export const ConversationModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [checkedItems, setCheckedItems] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { contacts } = useContacts()
  const { createConversation } = useConversations()

  const handleNewConversation = async (e: FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    const recipients = checkedItems.map(checkedItem =>
      contacts.find(({ id }) => id === checkedItem)
    )

    createConversation({ recipients })

    console.log('New Conversation -checkedItems', { checkedItems })
    console.log('New Conversation -recipients', { recipients })
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
                    isChecked={checkedItems.includes(id)}
                    onChange={() => handleCheckBoxChange(id)}
                  >
                    {id}
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
