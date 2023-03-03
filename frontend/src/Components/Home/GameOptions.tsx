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
import React, { useEffect } from "react";
type Props = {
  backgroundColor: string;
};
const GameOptions = () => {
  let [player, setPlayer] = React.useState<string>("");
  let [mode, setMode] = React.useState<string>("");
  let [single, setSingle] = React.useState<string>("");
  let [multi, setMulti] = React.useState<string>("");
  let [player1, setPlayer1] = React.useState<string>("");
  let [player2, setPlayer2] = React.useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  let handleAdd = () => {
    if (mode === "select") {
      toast({
        title: "Select Category and Players",

        status: "info",
        duration: 3000,
        isClosable: true,
      });
      isOpen = isOpen;
    } else if (mode === "single" && !player1) {
      toast({
        title: "Select Player1",

        status: "info",
        duration: 3000,
        isClosable: true,
      });
      isOpen = isOpen;
    } else if (mode === "multi" && !player1 && !player2) {
      toast({
        title: "Select Player1 and player2",

        status: "info",
        duration: 3000,
        isClosable: true,
      });
      isOpen = isOpen;
    }
    onClose();
    setMode("select");
  };

  console.log(mode);
  console.log(player1);
  console.log(player2);
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
          onClick={onOpen}
        >
          New Game
        </Button>
        <Button
          colorScheme="yellow"
          variant="solid"
          size={{ lg: "lg", md: "md", base: "md" }}
        >
          Score Board
        </Button>
      </Flex>
      <Modal
        isOpen={isOpen}
        onClose={onClose}

        // backgroundColor:string="rgb(131,58,180)"
        // background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={5}>
              <FormControl>
                <FormLabel>Let's play 🎮</FormLabel>
                <Select onChange={(e) => setMode(e.target.value)} mt={6}>
                  <option value="select">Select Mode</option>
                  <option value="single">Single Player</option>
                  <option value="multi">Multi Player</option>
                </Select>
                {mode === "single" ? (
                  <Box>
                    <FormLabel mt={6}>Player1 Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Add Playername..."
                      value={player1}
                      onChange={(e) => setPlayer1(e.target.value)}
                      mt={3}
                    />
                  </Box>
                ) : mode === "multi" ? (
                  <Box>
                    <FormLabel mt={6}>Player1 Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Add Playername..."
                      value={player1}
                      onChange={(e) => setPlayer1(e.target.value)}
                      mt={3}
                    />

                    <FormLabel mt={6}>Player2 Name</FormLabel>
                    <Input
                      type="text"
                      placeholder="Add Playername..."
                      value={player2}
                      onChange={(e) => setPlayer2(e.target.value)}
                      mt={3}
                    />
                  </Box>
                ) : mode === "select" ? null : null}
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="yellow"
              variant="solid"
              mr={3}
              onClick={handleAdd}
            >
              ADD
            </Button>
            <Button
              onClick={onClose}
              backgroundColor={"white"}
              _hover={{ backgroundColor: "red.400" }}
            >
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default GameOptions;
