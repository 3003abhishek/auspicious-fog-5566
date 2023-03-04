
import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React, { useContext, useState, useEffect } from "react";
import MainGame from "../Components/Game/MainGame";
import LogoBar from "../Components/Home/LogoBar";
import { GameContext } from "../Context/GameContext";

const Game = () => {
  const [count, setCount] = useState<number>(0);
  const [time, setTime] = useState(0);
  
  const timer = () => {
    setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  useEffect(() => {
    timer();
  }, []);

  return (
    <Flex
      minH={"100vh"}
      w={"100%"}
      background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
      p={"1rem"}
      justify={"center"}
      align={"center"}
    >
      {time >= 30 ? (
        <Box>
          <Heading size={"2xl"} mb={"4rem"} textAlign={"center"}>
            Game Ended
          </Heading>
          <Flex
            direction={"column"}
            justify={"center"}
            align={"center"}
            gap={10}
            border={"1px solid orange"}
            p={"3.5rem"}
            borderRadius={"0.5rem"}
            box-shadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
          >
            <Heading size={"xl"}>Player Name</Heading>
            <Heading size={"xl"}>Score : {count}</Heading>
            <Button
              colorScheme="yellow"
              variant="solid"
              size={"lg"}
              onClick={() => {
                setTime(0);
                setCount(0);
              }}
            >
              Play Again
            </Button>
          </Flex>
        </Box>
      ) : (
        <>
          <Box
            w={"25%"}
            minH={"75vh"}
            bg={"black"}
            m={"2rem auto 0 auto"}
            borderRadius={"1rem"}
            color={"white"}
            p={"2rem"}
            textAlign={"center"}
          >
            <Heading size={"lg"}>Player Name</Heading>
            <Text fontSize={"1.5rem"} fontWeight={500} my={"1.5rem"}>
              Points : &nbsp; &nbsp; {count}
            </Text>
            <Text fontSize={"1.5rem"} fontWeight={500}>
              Time : &nbsp; &nbsp; {time}
            </Text>
          </Box>
          <Box
            position={"relative"}
            width={"72%"}
            bg={"black"}
            minH={"75vh"}
            m={"2rem auto 0 auto"}
            borderRadius={"1rem"}
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            border={"1px dotted red"}
            p={"1rem"}
          >
            <MainGame
              count={count}
              setCount={setCount}
            />
          </Box>
        </>
      )}
    </Flex>
  );
};

export default Game;
