import { Box } from "@chakra-ui/react";
import "./App.css";
import Home from "./Pages/Home";
import { ChakraProvider } from "@chakra-ui/react";
import Game from "./Pages/Game";
import GameContextProvider from "./Context/GameContext";

function App() {
  return (
    <Box className="App">
      <ChakraProvider>
        <GameContextProvider>
          <Home />
        </GameContextProvider>
      </ChakraProvider>
    </Box>
  );
}

export default App;
