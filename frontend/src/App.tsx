import { Box } from "@chakra-ui/react";
import "./App.css";
import Home from "./Pages/Home";
import Difficulty from "./Pages/Difficulty";
import { ChakraProvider } from "@chakra-ui/react";


function App() {
  return (
    <Box className="App">

      <ChakraProvider>
        <Difficulty />
      </ChakraProvider>

    </Box>
  );
}

export default App;
