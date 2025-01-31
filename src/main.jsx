import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#e0f7fa',
      100: '#b2ebf2',
      200: '#80deea',
      300: '#4dd0e1',
      400: '#26c6da',
      500: '#00bcd4',
      600: '#00acc1',
      700: '#0097a7',
      800: '#00838f',
      900: '#006064',
    },
  },
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: false,
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)