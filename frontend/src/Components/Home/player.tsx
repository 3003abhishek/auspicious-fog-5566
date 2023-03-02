import React from "react";
import { Box, Button, Center } from '@chakra-ui/react'



    // ChildComponent.tsx

type Props = {
    onPropChange:(propValue:string)=>void;

    
  }

  
  
  const Players=({ onPropChange }: Props) => {
    const handleClick1:React.MouseEventHandler<HTMLButtonElement>=()=>{
      const propValue="player1" ;
    //   console.log(propValue);
  
      onPropChange(propValue);
    }

    const handleClick2:React.MouseEventHandler<HTMLButtonElement>=()=>{
        const propValue="player2" ;
      //   console.log(propValue);
    
        onPropChange(propValue);
      }
  
    
  

  



    return (
      <Box width={300} height={200} bg={"green.300"}>
         <Center>
         <Button onClick={handleClick1}>Player 1</Button>
       <Button onClick={handleClick2}>Player 2</Button>

         </Center>
      





      </Box>
    )
}

export default Players;