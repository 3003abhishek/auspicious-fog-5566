
import {
  Box,
  Button,
  Flex,
} from "@chakra-ui/react";
import { useContext } from "react";
import { SocketContext } from "../Context/socket.context";



const DisplayWinner = () => {
  const { currentRoom }: any = useContext(SocketContext);
  const playerOne = currentRoom.players[Object.keys(currentRoom.players)[0]];
  const playerTwo = currentRoom.players[Object.keys(currentRoom.players)[1]];

  return (
    <Box
      w="full"
      textAlign={"center"}
      p={"3rem"}
      m={"0.5rem auto 2.4rem auto"}
      border={"1px solid orange"}
      borderRadius="0.5rem"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
    >
      <Flex direction={"column"}>
        <Button
          w="full"
          colorScheme="yellow"
          variant="solid"
          mb={"2rem"}
          size={{ lg: "lg", md: "md", base: "md" }}
        >
          {(playerOne.score == playerTwo.score) ? "Tie" : (playerOne.score > playerTwo.score) ? `${playerOne.userName} won` : `${playerTwo.userName} won`}
        </Button>
        <Button
          w="full"
          colorScheme="yellow"
          variant="solid"
          mb={"2rem"}
          size={{ lg: "lg", md: "md", base: "md" }}
        >
          {playerOne.userName} score: {playerOne.score}
        </Button>
        <Button
          w="full"
          colorScheme="yellow"
          variant="solid"
          size={{ lg: "lg", md: "md", base: "md" }}
        >
          {playerTwo.userName} score: {playerTwo.score}
        </Button>
      </Flex>
    </Box>
  );
};

export default DisplayWinner;
