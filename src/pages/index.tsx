import { useEffect } from 'react'
import { useRouter } from 'next/router'

import { Flex } from '@chakra-ui/react'

import * as C from '~/components'
import { useUser } from '~/contexts'

export default function Home() {
  const { userId } = useUser()
  const { push } = useRouter()

  useEffect(() => {
    if (!userId) {
      push('/login')
    }
  }, [push, userId])

  if (!userId) return <Flex />

  return (
    <div>
      <C.MetaTags />
      <Flex w="100vw" h="100vh">
        <C.Sidebar />
      </Flex>
    </div>
  )
}
