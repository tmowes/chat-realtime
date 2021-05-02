import { Button, Flex, Icon } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { RiSendPlaneFill } from 'react-icons/ri'

import { Textarea } from '~/components/Form'
import { NewMessageFormData, useConversations } from '~/contexts'
import { newMessageSchema } from '~/utils'

export const ChatInputForm = () => {
  const { register, handleSubmit, formState, reset } = useForm({
    resolver: yupResolver(newMessageSchema),
  })

  const { sendMessage, selectedConversation } = useConversations()

  const { errors, isSubmitting } = formState

  const handleNewMessage = async ({ text }: NewMessageFormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000))

    sendMessage({
      recipients: selectedConversation.recipients,
      text,
    })

    reset({ text: '' })
  }

  return (
    <Flex
      as="form"
      mx="4"
      mr="6"
      align="center"
      onSubmit={handleSubmit(handleNewMessage)}
    >
      <Textarea
        name="text"
        resize="none"
        error={errors.text}
        {...register('text')}
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
      />
      <Button
        isLoading={isSubmitting}
        type="submit"
        colorScheme="blackAlpha"
        mr="auto"
        p="8"
      >
        <Icon as={RiSendPlaneFill} fontSize="40" />
      </Button>
    </Flex>
  )
}
