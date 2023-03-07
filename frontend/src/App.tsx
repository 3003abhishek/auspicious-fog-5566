import { RxSpeakerLoud, RxSpeakerOff } from 'react-icons/rx';
import { SocketContext } from "./Context/socket.context";
import { Box, Button } from "@chakra-ui/react";
import AllRoutes from "./routes/AllRoutes";
import { useContext } from 'react'
import "./App.css";

function App() {
  const { play, setPlay }: any = useContext(SocketContext)

  return (
    <Box className="App">
      <Button
        className='muteBtn'
        bgColor={play ? "green.400" : "#ecc94b"}
        onClick={() => {
          setPlay(!play)
        }}
      >{play ? <RxSpeakerLoud /> : <RxSpeakerOff />}</Button>
      <AllRoutes />
    </Box>
  );
}

export default App;
