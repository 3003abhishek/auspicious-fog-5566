import React from "react";
import { Box } from "@chakra-ui/react";
import Players from "../Components/Home/player";
import { useState } from "react";

import { Flex } from "@chakra-ui/react";
import LogoBar from "../Components/Home/LogoBar";
import GameOptions from "../Components/Home/GameOptions";

const Home = () => {
  const [player, setPlayer] = useState("");
  let handlePlayer = (propValue: string): void => {
    setPlayer(propValue);
  };

  console.log(player);

  return (
    <Flex
      w={"100%"}
      minH={"100vh"}
      direction={"column"}
      m={"auto"}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      backgroundColor="rgb(131,58,180)"
      background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
    >
      <LogoBar />
      <GameOptions />
      {/* <Players onPropChange={handlePlayer} /> */}
    </Flex>
  );
};

export default Home;
