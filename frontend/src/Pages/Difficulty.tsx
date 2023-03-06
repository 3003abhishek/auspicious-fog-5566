import { useCallback, useContext } from "react";
import { Box, Button, Heading, Tooltip } from "@chakra-ui/react";
import DifficultyOptions from "../Components/DifficultyOptions";
import { useState } from "react";

import { Flex } from "@chakra-ui/react";
import { SocketContext } from "../Context/socket.context";
import LogoBar from "../Components/Home/LogoBar";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { playSound } from "../Components/Sound";
import { useNavigate } from "react-router-dom";
let Difficulty = () => {
  const { play }: any = useContext(SocketContext)
  let [difficultyValue, setdifficultyValue] = useState<string>("");
  let handleDifficulty = useCallback((propValue: string): void => {
    setdifficultyValue(propValue);
  }, []);
  let navigate = useNavigate();
  let handleBack = useCallback(() => {
    navigate("/");
    playSound(play);
  }, []);
  return (
    <Flex
      w={"100%"}
      minH={"100vh"}
      direction={"column"}
      m={"auto"}
      boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
      backgroundColor="rgb(131,58,180)"
      background="linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%)"
    >
      <Box
        mt={8}
        ml={8}
        w={{ lg: "3%", md: "5%", base: "12%" }}
        position="absolute"
      >
        <Tooltip label="Go Back" aria-label="A tooltip">
          <Button
            onClick={handleBack}
            colorScheme="twitter"
            _hover={{ bgColor: "#ecc94b" }}
            variant="outline"
            size={"sm"}
          >
            <ArrowBackIcon />
          </Button>
        </Tooltip>
      </Box>
      <LogoBar />
      <Box textAlign={"center"} mt={8}>
        <Heading size={"lg"} color="black">
          Difficulty Level
        </Heading>
      </Box>
      <Box>
        <DifficultyOptions onDifficultyChange={handleDifficulty} />
      </Box>
    </Flex>
  );
};

export default Difficulty;
