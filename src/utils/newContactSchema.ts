import * as yup from 'yup'

export const newContactSchema = yup.object().shape({
  id: yup.string().required('ID required'),
  name: yup.string().required('Name required'),
})
