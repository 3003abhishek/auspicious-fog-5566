import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Players from "../Components/Home/player";
import DifficultyOptions from "../Components/DifficultyOptions";
import { useState } from "react";

import { Flex } from "@chakra-ui/react";
import LogoBar from "../Components/Home/LogoBar";
import GameOptions from "../Components/Home/GameOptions";

let Difficulty = () => {
  let [difficultyValue, setdifficultyValue] = useState<string>("");
  let handleDifficulty = (propValue: string): void => {
    setdifficultyValue(propValue);
  };

  console.log(difficultyValue);

  return (
    <Flex
      w={"100%"}
      minH={"100vh"}
      direction={"column"}
      m={"auto"}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      borderRadius={"0.5rem"}
      backgroundColor="rgb(131,58,180)"
      background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
    >
      <LogoBar />
      <Box textAlign={"center"} mt={8}>
        <Heading size={"lg"} color="black">
          Difficulty Level
        </Heading>
      </Box>
      <Box>
        <DifficultyOptions onDifficultyChange={handleDifficulty} />
      </Box>
      {/* <Players onPropChange={handlePlayer} /> */}
    </Flex>
  );
};

export default Difficulty;
