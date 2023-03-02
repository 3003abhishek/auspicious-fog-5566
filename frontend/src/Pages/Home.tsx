import React from 'react'
import { Box } from '@chakra-ui/react';
import Players from '../Components/Home/player';
import { useState } from 'react';
const Home = () => {
  const [player,setPlayer]=useState("")
  let handlePlayer=(propValue:string):void=>{
     setPlayer(propValue);
     
  }

  console.log(player);

  return (
    <>
    
    <Box>
        Home Page

    </Box>
    
    <Players onPropChange={handlePlayer}/>
    </>
    
  )
}

export default Home;