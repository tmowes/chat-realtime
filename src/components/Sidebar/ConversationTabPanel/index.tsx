import {
  Button,
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
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'

import { Input } from '~/components/Form'
import { CreateConversationFormData } from '~/contexts'
import { newConversationSchema } from '~/utils'

export const ConversationTabPanel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(newConversationSchema),
  })

  const { errors, isSubmitting } = formState

  const handleNewConversation = async ({
    id,
    name,
  }: CreateConversationFormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('New Conversation', { id, name })
  }

  return (
    <Flex direction="column" h="100%" w="100%" p="1">
      <Button w="100%" colorScheme="orange" mt="auto" mb="8" onClick={onOpen}>
        Create new conversation
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
          <Flex
            as="form"
            flexDir="column"
            onSubmit={handleSubmit(handleNewConversation)}
          >
            <ModalBody>
              <Stack spacing="2">
                <Input
                  name="id"
                  type="text"
                  label="ID"
                  error={errors.id}
                  {...register('id')}
                />
                <Input
                  name="name"
                  type="text"
                  label="Name"
                  error={errors.name}
                  {...register('name')}
                />
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
    </Flex>
  )
}
