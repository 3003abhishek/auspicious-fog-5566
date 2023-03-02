import React from 'react';
import { Box, Flex, Image } from '@chakra-ui/react';
import Logo from "../../Asset/1.png";

const LogoBar = () => {
  return (
    <Flex>
        <Image src={Logo} />
    </Flex>
  )
}

export default LogoBar;