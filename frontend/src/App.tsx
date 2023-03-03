

import { Box } from "@chakra-ui/react";
import "./App.css";
import Home from "./Pages/Home";
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
    <Box className="App">

      <ChakraProvider>
        <Home />
      </ChakraProvider>

    </Box>
  );
}

export default App;
