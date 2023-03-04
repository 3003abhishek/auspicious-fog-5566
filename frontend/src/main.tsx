import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import SocketContextProvider from "./Context/socket.context";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <SocketContextProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </SocketContextProvider>
  </BrowserRouter>
);
