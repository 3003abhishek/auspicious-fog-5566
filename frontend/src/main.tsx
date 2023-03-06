import SocketContextProvider from "./Context/socket.context";
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App'


ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <SocketContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </SocketContextProvider>
  </BrowserRouter>
);
