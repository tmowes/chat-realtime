import * as yup from 'yup'

export const signInSchema = yup.object().shape({
  id: yup.string().required('ID obrigatório'),
})
