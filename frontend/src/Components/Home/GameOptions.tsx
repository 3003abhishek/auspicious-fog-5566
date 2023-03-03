import { Box, Button } from "@chakra-ui/react";
import React from "react";

const GameOptions = () => {
  return (
    <Box
      w={"25%"}
      textAlign={"center"}
      p={"3rem"}
      m={"2.5rem auto 5rem auto"}
      border={"0.5px solid orange"}
      borderRadius={"0.4rem"}
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
    >
      <Button colorScheme='yellow' variant="solid" mb={"2rem"} size={"lg"}>
        New Game
      </Button>
      <Button colorScheme='yellow' variant="solid" size={"lg"}>
        Score Board
      </Button>
    </Box>
  );
};

export default GameOptions;
