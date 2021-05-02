import * as yup from 'yup'

export const newMessageSchema = yup.object().shape({
  text: yup.string().required('text required'),
})
