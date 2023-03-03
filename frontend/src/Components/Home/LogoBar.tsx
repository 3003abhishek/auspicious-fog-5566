import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import Logo from "../../Asset/2.png";

const LogoBar = () => {
  return (
    <Flex w={"18%"} margin={"auto"}>
        <Image src={Logo} alt={"logo"} w={"100%"} />
    </Flex>
  )
}

export default LogoBar;