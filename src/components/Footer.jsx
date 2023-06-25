import React from "react";
import { Flex, Box, Text } from "@chakra-ui/react";
// TODO: answer here

const Footer = () => {
  return (
    <Box py={1} textAlign="center" color="white" fontSize={10} mt="16" opacity={0.5} fontStyle="italic" borderTop={"1px"} className="footer">
      <Flex flexWrap="wrap" direction="row" align="center" justify="center" fontWeight="semibold">
        <Text mx={2} color="white" className="studentName">
          Muhammad Kafin Jastiadirizal Prasadana
        </Text>
        <Text mx={2} color="white" className="studentId">
          FE5654415
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;
