import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Modal,
  Input,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
  Select,
  Flex,
  VStack,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { playSound } from "../Components/Sound";
type Props = {
  backgroundColor: string;
};

type Props_diff = {
  onDifficultyChange: (propValue: string) => void;
};
const DisplayWinner = ({ onDifficultyChange }: Props_diff) => {
  let [difficulty, setDifficulty] = useState<string>("");
  let [play, setPlay] = React.useState<boolean>(true);
  const navigate = useNavigate();
  const toast = useToast();

  interface Player {
    score: number;
    userName: string;
  }
  
  interface Players {
    [key: string]: Player;
  }
  
  interface ICurrentRoom {
    gameStart: boolean;
    players: Players;
    room_name: string;
    vacant: boolean;
  }
  

 const  currentRoom :ICurrentRoom= {
    gameStart:true,
    players:{
        "44GPLZZPlKJFO7LLAAAD":{ score: 9, userName: 'abhishek'},
        "v8vVgrh0KjS4-ateAAAB":{score: 6, userName: 'atanu'}
    },
    room_name:"masai",
    vacant:false
}

const player1Score = currentRoom.players["44GPLZZPlKJFO7LLAAAD"].score;
const player2Score = currentRoom.players["v8vVgrh0KjS4-ateAAAB"].score;

  return (
    <Box
      w={{ lg: "25%", md: "30%", base: "75%" }}
      textAlign={"center"}
      p={"3rem"}
      m={"0.5rem auto 2.4rem auto"}
      border={"1px solid orange"}
      borderRadius="0.5rem"
      boxShadow="rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"
    >
      <Flex direction={"column"}>
        <Button
          colorScheme="yellow"
          variant="solid"
          mb={"2rem"}
          size={{ lg: "lg", md: "md", base: "md" }}
         
        >
          {(player1Score>player2Score)?"Player1 won":"Player2 won"}
        </Button>
        <Button
          colorScheme="yellow"
          variant="solid"
          mb={"2rem"}
          size={{ lg: "lg", md: "md", base: "md" }}
          
        >
          Player1 score: {player1Score}
        </Button>
        <Button
          colorScheme="yellow"
          variant="solid"
          size={{ lg: "lg", md: "md", base: "md" }}
          
        >
         Player2 score: {player1Score}
        </Button>
      </Flex>
    </Box>
  );
};

export default DisplayWinner;
