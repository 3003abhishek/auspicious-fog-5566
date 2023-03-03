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
import React, { useEffect ,useState } from "react";
type Props = {
  backgroundColor: string;
};

type Props_diff={
    onDifficultyChange:(propValue:String)=>void;

}
const DifficultyOptions = ({onDifficultyChange}:Props_diff) => {
 
    let [difficulty,setDifficulty]=useState<string>("")
 
    const toast = useToast();

    let HandleDifficulty:React.MouseEventHandler<HTMLButtonElement>=(event)=>{

     onDifficultyChange(event.currentTarget.innerText);
    }



//   let handleAdd = () => {
//     if (mode === "select") {
//       toast({
//         title: "Select Category and Players",

//         status: "info",
//         duration: 3000,
//         isClosable: true,
//       });
//       isOpen = isOpen;
//     } else if (mode === "single" && !player1) {
//       toast({
//         title: "Select Player1",

//         status: "info",
//         duration: 3000,
//         isClosable: true,
//       });
//       isOpen = isOpen;
//     } else if (mode === "multi" && !player1 && !player2) {
//       toast({
//         title: "Select Player1 and player2",

//         status: "info",
//         duration: 3000,
//         isClosable: true,
//       });
//       isOpen = isOpen;
//     }
//     onClose();
//     setMode("select");
//   };

  return (
    <Box
      w={{ lg: "25%", md: "30%", base: "75%" }}
      textAlign={"center"}
      p={"3rem"}
      m={"0.5rem auto 5rem auto"}
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
      
  )
}

export default DifficultyOptions ;
