import * as yup from 'yup'

export const newMessageSchema = yup.object().shape({
  message: yup.string().required('message required'),
})
