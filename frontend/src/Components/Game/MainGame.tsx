import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

interface MainGameProps {
  count: number;
  setCount: (count: number) => void;
  BoxHeight: number;
  BoxWidth: number;
}

const MainGame = ({ count, setCount, BoxHeight, BoxWidth }: MainGameProps) => {
  console.log(' BoxHeight, BoxWidth:', BoxHeight, BoxWidth)
  let { condition } = useParams();
  let [speed, setSpeed] = useState<number>(3000);

  const speedHandler = () => {
    if (condition === "Easy") {
      setSpeed(5000);
    } else if (condition === "Moderate") {
      setSpeed(1000);
    } else {
      setSpeed(500);
    }
  };

  const [position, setPosition] = useState({ top: 0, left: 0 });

  const [position2, setPosition2] = useState({ top: 0, left: 0 });

  const [position3, setPosition3] = useState({ top: 0, left: 0 });

  const [position4, setPosition4] = useState({ top: 0, left: 0 });

  const changePosition = (time: number, maxW: number, maxH: number) => {
    setTimeout(() => {
      let height = Math.floor(Math.random() * maxH);
      let width = Math.floor(Math.random() * maxW);
      setPosition({ top: height, left: width });
    }, time);
  };

  const changePosition2 = (time: number, maxW: number, maxH: number) => {
    setTimeout(() => {
      let height = Math.floor(Math.random() * maxH);
      let width = Math.floor(Math.random() * maxW);
      setPosition2({ top: height, left: width });
    }, time);
  };

  const changePosition3 = (time: number, maxW: number, maxH: number) => {
    setTimeout(() => {
      let height = Math.floor(Math.random() * maxH);
      let width = Math.floor(Math.random() * maxW);
      setPosition3({ top: height, left: width });
    }, time);
  };

  const changePosition4 = (time: number, maxW: number, maxH: number) => {
    setTimeout(() => {
      let height = Math.floor(Math.random() * maxH);
      let width = Math.floor(Math.random() * maxW);
      setPosition4({ top: height, left: width });
    }, time);
  };

  useEffect(() => {
    speedHandler();
    setInterval(() => {
      changePosition(0, BoxWidth, BoxHeight);
    }, speed);

    setInterval(() => {
      changePosition2(0, BoxWidth, BoxHeight);
    }, speed + 1000);

    setInterval(() => {
      changePosition3(0, BoxWidth, BoxHeight);
    }, speed + 2000);

    setInterval(() => {
      changePosition4(0, BoxWidth, BoxHeight);
    }, speed + 3000);
  }, []);

  return (
    <>
      <Box
        className="game"
        h={{ lg: "50px", md: "40px", base: "20px" }}
        w={{ lg: "50px", md: "40px", base: "20px" }}
        bgColor="orange"
        borderRadius="50%"
        cursor="pointer"
        position="absolute"
        top={position.top + "px"}
        left={position.left + "px"}
        onClick={() => {
          changePosition(0, BoxWidth, BoxHeight);
          setCount(count + 1);
        }}
      ></Box>
      <Box
        className="game"
        h={{ lg: "50px", md: "40px", base: "20px" }}
        w={{ lg: "50px", md: "40px", base: "20px" }}
        bgColor="orange"
        borderRadius="50%"
        cursor="pointer"
        position="absolute"
        top={position2.top + "px"}
        left={position2.left + "px"}
        onClick={() => {
          changePosition2(0, BoxWidth, BoxHeight);
          setCount(count + 1);
        }}
      ></Box>
      <Box
        className="game"
        h={{ lg: "50px", md: "40px", base: "20px" }}
        w={{ lg: "50px", md: "40px", base: "20px" }}
        bgColor="orange"
        borderRadius="50%"
        cursor="pointer"
        position="absolute"
        top={position3.top + "px"}
        left={position3.left + "px"}
        onClick={() => {
          changePosition3(0, BoxWidth, BoxHeight);
          setCount(count + 1);
        }}
      ></Box>
      {count === 10 && (
        <Box
          className="game"
          h={{ lg: "50px", md: "40px", base: "20px" }}
          w={{ lg: "50px", md: "40px", base: "20px" }}
          bgColor="red"
          borderRadius="50%"
          cursor="pointer"
          position="absolute"
          top={position4.top + "px"}
          left={position4.left + "px"}
          onClick={() => {
            changePosition4(0, BoxWidth, BoxHeight);
            setCount(count + 10);
          }}
        ></Box>
      )}
    </>
  );
};

export default MainGame;
