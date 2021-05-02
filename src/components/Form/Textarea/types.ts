import { ForwardRefRenderFunction } from 'react'

import { TextareaProps } from '@chakra-ui/react'
import { FieldError } from 'react-hook-form'

export type TextareaBaseProps = ForwardRefRenderFunction<
  HTMLTextAreaElement,
  CustomInputProps
>

export type CustomInputProps = TextareaProps & {
  name: string
  label?: string
  error?: FieldError
}
