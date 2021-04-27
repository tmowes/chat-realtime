import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { Flex } from '@chakra-ui/react'

import * as C from '~/components'
import { useUser } from '~/contexts'

export default function Login() {
  const { userId, setUserId, generateNewID } = useUser()
  const { push } = useRouter()

  useEffect(() => {
    if (userId) {
      push('/')
    }
  }, [push, userId])

  return (
    <div>
      <C.MetaTags />
      <Flex w="100vw" h="100vh" align="center" justify="center">
        <C.LoginForm
          handleGenerateNewID={generateNewID}
          handleUserId={setUserId}
        />
      </Flex>
    </div>
  )
}
