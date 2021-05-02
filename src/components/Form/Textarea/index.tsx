import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  Textarea as ChakraTextarea,
} from '@chakra-ui/react'

import { TextareaBaseProps } from './types'

const TextareaBase: TextareaBaseProps = (props, ref) => {
  const { name, label, error = null, ...rest } = props
  return (
    <FormControl isInvalid={!!error}>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraTextarea
        id={name}
        name={name}
        focusBorderColor="orange.500"
        bgColor="gray.900"
        variant="filled"
        _hover={{
          bgColor: 'gray.900',
        }}
        ref={ref}
        {...rest}
      />
      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  )
}

export const Textarea = forwardRef(TextareaBase)
