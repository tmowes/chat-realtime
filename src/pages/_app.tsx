import type { AppProps } from 'next/app'

import { ChakraProvider, Flex } from '@chakra-ui/react'

import { theme } from '~/styles'
import { AppProvider } from '~/contexts'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AppProvider>
        <Flex w="100vw" minH="100vh">
          <Flex as="main" w="100%" direction="column">
            <Component {...pageProps} />
          </Flex>
        </Flex>
      </AppProvider>
    </ChakraProvider>
  )
}
