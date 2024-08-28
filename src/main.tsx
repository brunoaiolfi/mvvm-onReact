import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Routes } from './router/routes'

import { Box, ChakraProvider } from '@chakra-ui/react'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChakraProvider toastOptions={{ defaultOptions: { position: 'top-right', duration: 3000 } }}>
      <Box
        w="100vw"
        h="100vh"
        display={'flex'}
        
        flexDirection={'column'}
        alignItems={'center'}

        overflowY="hidden"
      >
        <Routes />
      </Box>
    </ChakraProvider>
  </StrictMode>,
)
