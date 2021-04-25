import { Dispatch, SetStateAction } from 'react'

export type LoginFormProps = {
  handleUserId: Dispatch<SetStateAction<string>>
  handleGenerateNewID: () => void
}
