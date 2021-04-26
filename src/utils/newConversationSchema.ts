import * as yup from 'yup'

export const newConversationSchema = yup.object().shape({
  id: yup.string().required('ID required'),
  name: yup.string().required('Name required'),
})
