import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Box className="App">
      <Home/>
    </Box>
  )
}

export default App
