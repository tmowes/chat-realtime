import { useState } from 'react'

import { Button, Flex, Icon } from '@chakra-ui/react'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { RiSendPlaneFill } from 'react-icons/ri'

import { Textarea } from '~/components/Form'
import { NewMessageFormData } from '~/contexts'
import { newMessageSchema } from '~/utils'

export const ChatInputForm = () => {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(newMessageSchema),
  })

  const [inputValue, setInputValue] = useState('')

  const { errors, isSubmitting } = formState

  const handleNewMessage = async ({ message }: NewMessageFormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('New Message', { message })
  }

  return (
    <Flex
      as="form"
      mx="8"
      align="center"
      onSubmit={handleSubmit(handleNewMessage)}
    >
      <Textarea
        name="message"
        resize="none"
        error={errors.message}
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
        {...register('message')}
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
        colorScheme="orange"
        mr="auto"
        p="8"
      >
        <Icon as={RiSendPlaneFill} fontSize="40" />
      </Button>
    </Flex>
  )
}
