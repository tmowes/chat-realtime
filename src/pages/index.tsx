import { Flex } from '@chakra-ui/react'

import * as C from '~/components'
import { useUser } from '~/contexts'

export default function Login() {
  const { userId, setUserId, generateNewID } = useUser()

  return (
    <>
      <C.MetaTags />
      <Flex w="100vw" h="100vh">
        {userId ? (
          <C.Sidebar id={userId} />
        ) : (
          <Flex w="100vw" h="100vh" align="center" justify="center">
            <C.LoginForm
              handleGenerateNewID={generateNewID}
              handleUserId={setUserId}
            />
          </Flex>
        )}
      </Flex>
    </>
  )
}
