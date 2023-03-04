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
const DifficultyOptions = ({ onDifficultyChange }: Props_diff) => {
  let [difficulty, setDifficulty] = useState<string>("");
  let [play, setPlay] = React.useState<boolean>(true);
  const navigate = useNavigate();
  const toast = useToast();

  let HandleDifficulty: React.MouseEventHandler<HTMLButtonElement> = (
    event
  ) => {
    onDifficultyChange(event.currentTarget.innerText);
    toast({
      title: `Difficulty level has been set to ${event.currentTarget.innerText}`,
      position: "top-right",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    playSound(play);
    navigate(`/game/${event.currentTarget.innerText}`);
  };

  return (
    <Box
      w={{ lg: "25%", md: "30%", base: "75%" }}
      textAlign={"center"}
      p={"3rem"}
      m={"0.5rem auto 2.7rem auto"}
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
          onClick={HandleDifficulty}
        >
          Easy
        </Button>
        <Button
          colorScheme="yellow"
          variant="solid"
          mb={"2rem"}
          size={{ lg: "lg", md: "md", base: "md" }}
          onClick={HandleDifficulty}
        >
          Moderate
        </Button>
        <Button
          colorScheme="yellow"
          variant="solid"
          size={{ lg: "lg", md: "md", base: "md" }}
          onClick={HandleDifficulty}
        >
          Hard
        </Button>
      </Flex>
    </Box>
  );
};

export default DifficultyOptions;
