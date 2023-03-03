import { Box } from "@chakra-ui/react";
import "./App.css";
import Home from "./Pages/Home";
import Difficulty from "./Pages/Difficulty";

import AllRoutes from "./routes/AllRoutes";

function App() {
  return (
    <Box className="App">
      <AllRoutes />
    </Box>
  );
}

export default App;
