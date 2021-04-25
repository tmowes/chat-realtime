import { Flex, Text } from '@chakra-ui/react'

import * as C from '~/components'
import { useUser } from '~/contexts'

export default function Login() {
  const { userId, setUserId, generateNewID } = useUser()

  return (
    <>
      <C.MetaTags />
      <Flex w="100vw" h="100vh" align="center" justify="center">
        {userId ? (
          <Text fontSize="0.8rem" lineHeight="1" mt="2">
            {userId}
          </Text>
        ) : (
          <C.LoginForm
            handleGenerateNewID={generateNewID}
            handleUserId={setUserId}
          />
        )}
      </Flex>
    </>
  )
}
