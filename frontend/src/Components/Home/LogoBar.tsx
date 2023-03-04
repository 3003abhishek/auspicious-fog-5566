import React from "react";
import { Box, Flex, Image } from "@chakra-ui/react";
import Logo from "../../Asset/2.png";

type LogoBarProps = {
  width: string;
};

const LogoBar = (props: LogoBarProps) => {
  return (
    <Flex w={{ lg: "18%", md: "18%", base: "40%" }} margin={"auto"}>
      <Image src={Logo} alt={"logo"} w={"100%"} />
    </Flex>
  );
};

export default LogoBar;
