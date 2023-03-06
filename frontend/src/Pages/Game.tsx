import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { useContext, useState, useEffect, useRef, useCallback } from "react";
import { flowSound, playSound } from "../Components/Sound";
import { SocketContext } from "../Context/socket.context";
import DisplayWinner from "../Components/DisplayWinner";
import MainGame from "../Components/Game/MainGame";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Loading from "../Components/Loading";
import { useNavigate } from "react-router";
import Logo from "../Asset/2.png";

const Game = () => {
  const { socket, userName, currentRoom, play }: any = useContext(SocketContext);
  const [count, setCount] = useState<number>(0);
  const [playAgain, setPlayAgain] = useState<boolean>(false);
  const [time, setTime] = useState(0);
  const timreRef = useRef<number>();
  const gameBoxRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const timer = useCallback(() => {
    if (timreRef.current) {
      clearInterval(timreRef.current)
    }
    timreRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }, []);

  let handlePlayAgain = useCallback(() => {
    setTime(0);
    setCount(0);
    playSound(play);
    flowSound(play);
    if (currentRoom) {
      socket.emit("restart:game", currentRoom)
    } else {
      setPlayAgain(!playAgain);
    }
  }, []);

  if (time == 31 && currentRoom) {
    currentRoom.players[socket.id].score = count;
    socket.emit("update:room", currentRoom)
  }

  if (time == 32) {
    clearInterval(timreRef.current)
  }

  useEffect(() => {
    if (!currentRoom || currentRoom?.gameStart) timer();
    flowSound(play);
  }, [currentRoom?.gameStart, playAgain]);

  return (currentRoom !== undefined && !currentRoom?.gameStart) ? <Loading /> : (

    <>
      <Flex
        direction={{ lg: "column", md: "column", base: "column" }}
        w={"100%"}
        background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
        pt={"1rem"}
        justify={"center"}
        align={"center"}
      >
        <Image
          src={Logo}
          alt={"logo"}
          w={{ lg: "5%", md: "15%", base: "25%" }}
          onClick={() => navigate("/")}
        />
        <Flex
          direction={{ lg: "row", md: "column", base: "column" }}
          minH={"88vh"}
          m={"auto"}
          w={"100%"}
          background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
          p={"1rem"}
          justify={"center"}
          align={"center"}
        >
          {time >= 30 ? (
            <Box>
              <Heading size={"2xl"} mb={"3rem"} textAlign={"center"}>
                Game Ended
              </Heading>
              <Flex
                w={"100%"}
                direction={"column"}
                justify={"center"}
                align={"center"}
                gap={10}
                border={"1px solid orange"}
                p={{ md: "3rem 6.5rem", base: "1rem" }}
                borderRadius={"0.5rem"}
                box-shadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
              >
                {
                  currentRoom ? <DisplayWinner /> :
                    <>
                      <Heading size={"xl"}>{userName}</Heading>
                      <Heading size={"xl"}>Score : {count}</Heading>
                    </>
                }
                <Button
                  colorScheme="yellow"
                  variant="solid"
                  size={"lg"}
                  onClick={handlePlayAgain}
                >
                  Play Again
                </Button>
                <Button
                  colorScheme="yellow"
                  variant="solid"
                  size={"lg"}
                  onClick={() => {
                    setTime(0);
                    setCount(0);
                    if (currentRoom) socket.emit("delete:room", currentRoom)
                    navigate("/");
                    playSound(play);
                  }}
                >
                  Main Menu
                </Button>
              </Flex>
            </Box>
          ) : (
            <>
              <Box
                w={{ lg: "25%", md: "72%", base: "72%" }}
                minH={{ lg: "75vh", md: "50vh", base: "50vh" }}
                bg={"black"}
                m={"2rem auto 0 auto"}
                borderRadius={"1rem"}
                color={"white"}
                p={"2rem"}
                textAlign={"center"}
              >
                <Heading size={"lg"}>{currentRoom ? currentRoom.players[socket.id].userName : userName}</Heading>
                <Text fontSize={"1.5rem"} fontWeight={500} my={"1.5rem"}>
                  Points : &nbsp; &nbsp; {count}
                </Text>
                <Text fontSize={"1.5rem"} fontWeight={500} mb={"1.5rem"}>
                  Time : &nbsp; &nbsp; {30 - time}
                </Text>
                {
                  currentRoom ? <></> :
                    <Button
                      my={"1rem"}
                      colorScheme="teal"
                      size={"lg"}
                      variant="outline"
                      onClick={() => {
                        setCount(0);
                        setTime(0);
                      }}
                    >
                      Reset
                    </Button>
                } <br /> <br />
                <Button
                  leftIcon={<ArrowBackIcon />}
                  colorScheme="teal"
                  variant="outline"
                  onClick={() => {
                    setCount(0);
                    setTime(0);
                    navigate("/level");
                    flowSound(false)
                  }}
                >
                  Back
                </Button>
              </Box >
              <Box
                ref={gameBoxRef}
                position={"relative"}
                w={{ lg: "72%", md: "72%", base: "72%" }}
                bg={"black"}
                minH={{ lg: "75vh", md: "75vh", base: "75vh" }}
                m={"2rem auto 0 auto"}
                borderRadius={"1rem"}
                boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                border={"1px dotted red"}
                p={"1rem"}
              >
                <MainGame count={count} setCount={setCount} BoxHeight={(gameBoxRef.current?.clientHeight || 500) - 40} BoxWidth={(gameBoxRef.current?.clientWidth || 360) - 40} />
              </Box>
            </>
          )}
        </Flex >
      </Flex >
    </>
  );
};

export default Game;
