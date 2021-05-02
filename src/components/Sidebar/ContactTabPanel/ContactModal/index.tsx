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
import { CreateContactFormData, useContacts } from '~/contexts'
import { newContactSchema } from '~/utils'

export const ContactModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { createContact } = useContacts()

  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(newContactSchema),
  })

  const { errors, isSubmitting } = formState

  const handleNewContact = async ({ id, name }: CreateContactFormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    createContact({ id, name })
    console.log('New Contact', { id, name })
    reset({
      id: '',
      name: '',
    })
    onClose()
  }

  return (
    <>
      <Button w="100%" colorScheme="orange" mt="auto" mb="8" onClick={onOpen}>
        Create new Contact
      </Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent bg="gray.500">
          <ModalHeader>Add a new contact</ModalHeader>
          <ModalCloseButton />
          <Flex
            as="form"
            flexDir="column"
            onSubmit={handleSubmit(handleNewContact)}
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
                Create contact
              </Button>
            </ModalFooter>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  )
}
