
import React from 'react'
import { Box,Text } from '@chakra-ui/react';
import Players from '../Components/Home/player';
import DifficultyOptions from '../Components/DifficultyOptions';
import { useState } from 'react';


import { Flex } from "@chakra-ui/react";
import LogoBar from "../Components/Home/LogoBar";
import GameOptions from "../Components/Home/GameOptions";

const Difficulty = () => {
  const [difficultyValue,setdifficultyValue]=useState("")
  let handleDifficulty=(propValue:string):void=>{
     setdifficultyValue(propValue);
     
  }

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
      <Box w={{ lg: "25%", md: "30%", base: "75%" }}
      textAlign={"center"}
    //   p={"1rem"}
      m={"2rem auto 5rem auto"}
         pt={"5rem"}
      border={"1px solid red"}
      borderRadius="0.5rem"
      
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"><Text fontSize={{lg:40,md:30,base:20}}>Difficulty Level</Text></Box>
      <DifficultyOptions onDifficultyChange={handleDifficulty} />
      {/* <Players onPropChange={handlePlayer} /> */}
    
    </Flex>
  );
};


export default Difficulty;
