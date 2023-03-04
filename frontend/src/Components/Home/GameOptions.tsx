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
} from "@chakra-ui/react";
import React from "react";
type Props = {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
};
const GameOptions = () => {
  let [player, setPlayer] = React.useState<string>("");
  let [mode, setMode] = React.useState<string>("");
  let [single, setSingle] = React.useState<string>("");
  let [multi, setMulti] = React.useState<string>("");
  let [player1, setPlayer1] = React.useState<string>("");
  let [player2, setPlayer2] = React.useState<string>("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  console.log(mode);
  console.log(player1);
  console.log(player2);
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
      <Button
        colorScheme="yellow"
        variant="solid"
        mb={"2rem"}
        size={"lg"}
        onClick={onOpen}
      >
        New Game
      </Button>
      <Button colorScheme="yellow" variant="solid" size={"lg"}>
        Score Board
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={5}>
              <FormControl>
                <FormLabel>Let's play 🎮</FormLabel>
                <Select onChange={(e) => setMode(e.target.value)}>
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
                ) : (
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
                )}
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="yellow" variant="solid" mr={3}>
              Add
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
