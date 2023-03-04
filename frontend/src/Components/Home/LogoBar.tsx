import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import Logo from "../../Asset/2.png";
import { useNavigate } from "react-router-dom";

// type LogoBarProps = {
//   width: string;
// };

const LogoBar = () => {
  const navigate = useNavigate();
  return (
    <Flex w={{ lg: "18%", md: "18%", base: "40%" }} margin={"auto"}>
      <Image
        src={Logo}
        alt={"logo"}
        w={"100%"}
        onClick={() => {
          navigate("/");
        }}
      />
    </Flex>
  );
};

export default LogoBar;
