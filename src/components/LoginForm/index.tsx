import { Flex, Button, Stack, HStack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { SignInFormData } from '~/types'
import { signInSchema } from '~/utils'

import { Input } from '../Form'
import { LoginFormProps } from './types'

export const LoginForm = (props: LoginFormProps) => {
  const { handleGenerateNewID, handleUserId } = props
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInSchema),
  })

  const { errors, isSubmitting } = formState

  const handleSignIn = async ({ id }: SignInFormData) => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    handleUserId(id)
  }

  return (
    <Flex
      as="form"
      width="100%"
      maxWidth={360}
      bg="gray.800"
      p="8"
      borderRadius={8}
      flexDir="column"
      onSubmit={handleSubmit(handleSignIn)}
    >
      <Stack spacing="2">
        <Input
          name="id"
          type="text"
          label="ID"
          error={errors.id}
          {...register('id')}
        />
      </Stack>
      <HStack w="100%" spacing="4" mt="4">
        <Button
          type="submit"
          colorScheme="orange"
          size="lg"
          isLoading={isSubmitting}
        >
          Entrar
        </Button>
        <Button
          colorScheme="orange"
          ml="auto"
          size="lg"
          onClick={handleGenerateNewID}
        >
          Create a new ID
        </Button>
      </HStack>
    </Flex>
  )
}
