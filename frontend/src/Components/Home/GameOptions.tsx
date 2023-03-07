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
import { useNavigate } from "react-router-dom";
import { GoMute, GoUnmute } from "react-icons/go";
import { SocketContext } from "../../Context/socket.context";
import { playSound, errorSound } from "../../Components/Sound";
import React, { useCallback, useContext, useEffect, useRef, useState } from "react";


const GameOptions = () => {
  const userNameRef = useRef<HTMLInputElement>(null);
  const roomNameRef = useRef<HTMLInputElement>(null);
  const optionRef = useRef<HTMLSelectElement>(null);
  const roomsRef = useRef<HTMLSelectElement>(null);
  const [showOptions, setShowOptions] = useState<boolean>(true);
  let [mode, setMode] = React.useState<string>("");
  let [player1, setPlayer1] = React.useState<string>("");
  let [player2, setPlayer2] = React.useState<string>("");
  let { isOpen, onOpen, onClose } = useDisclosure();
  const { setUserName, socket, rooms, handleRoomCreator, handleJoinRoom, setPlay, play }: any = useContext(SocketContext);

  let navigate = useNavigate();

  const toast = useToast();

  let handleNewGame = useCallback(() => {
    onOpen();
    playSound(play);
  }, []);

  let handleScoreboard = useCallback(() => {
    playSound(play);
  }, []);

  let handleAdd = () => {
    if (mode === "select") {
      errorSound(play);
      toast({
        title: "Select Mode and Players",
        position: "top-right",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
      isOpen = isOpen;
    } else if (mode === "single" && !player1) {
      errorSound(play);
      toast({
        title: "Select Player",
        position: "top-right",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
      isOpen = isOpen;
    } else if (mode === "multi" && (!player1 || !player2)) {
      errorSound(play);
      toast({
        title: "Select Player1 and player2",
        position: "top-right",
        status: "info",
        duration: 3000,
        isClosable: true,
      });
      isOpen = isOpen;
    } else {
      setUserName(player1);
      onClose();
      setMode("select");
      playSound(play);
      navigate("/level");
    }
  };

  let handleSound = useCallback(() => {
    setPlay(!play);
    playSound(play);
  }, []);

  useEffect(() => {
    setMode("select");
  }, []);

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
          onClick={handleNewGame}
        >
          New Game
        </Button>
        <Button
          colorScheme="yellow"
          variant="solid"
          mb={"2rem"}
          size={{ lg: "lg", md: "md", base: "md" }}
          onClick={handleScoreboard}
        >
          Score Board
        </Button>
        {/* {play ? ( */}
        <Button
          rightIcon={play ? <GoUnmute /> : <GoMute />}
          colorScheme="yellow"
          variant="solid"
          size={{ lg: "lg", md: "md", base: "md" }}
          bgColor={play ? "green.400" : "#ecc94b"}
          _hover={{ bgColor: play ? "green.400" : "#ecc94b" }}
          onClick={handleSound}
        >
          Sound
        </Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton onClick={onClose} />
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
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        if (optionRef.current!.value == "") return;
                        optionRef.current!.value == "join"
                          ? handleJoinRoom(userNameRef.current!.value, roomsRef.current!.value)
                          : handleRoomCreator(
                            userNameRef.current!.value,
                            roomNameRef.current!.value
                          );
                      }}
                    >
                      <Select
                        style={{ margin: "10px 0px" }}
                        ref={optionRef}
                        placeholder="Choose option"
                        onChange={(e) => {
                          if (e.target.value !== "") {
                            setShowOptions(e.target.value == "create" ? true : false);
                            if (e.target.value == "join") {
                              socket.emit("send:rooms");
                            }
                          }
                        }}
                      >
                        <option value="create">Create Room</option>
                        <option value="join">Join Room</option>
                      </Select>
                      <Input
                        style={{ margin: "10px 0px" }}
                        ref={userNameRef}
                        required
                        placeholder="Enter your name to create room"
                      />
                      {showOptions ? (
                        <Input
                          style={{ margin: "10px 0px" }}
                          ref={roomNameRef}
                          required
                          placeholder="Enter room name to create"
                        />
                      ) : (
                        <Select style={{ margin: "10px 0px" }} placeholder="Choose Room" ref={roomsRef}>
                          {rooms.map((room: any, i: number) => (
                            <option key={i} value={room.room_name} disabled={!room.vacant}>
                              {room.room_name}
                            </option>
                          ))}
                        </Select>
                      )}
                      <Input
                        style={{ margin: "10px 0px" }}
                        type={"submit"}
                        value={!showOptions ? "Join room" : "Create room"}
                      />
                    </form>
                  </Box>
                ) : mode === "select" ? null : null}
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            {mode === "multi" ?
              <></> :
              <Button
                colorScheme="yellow"
                variant="solid"
                mr={3}
                onClick={handleAdd}
              >
                ADD
              </Button>
            }
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
