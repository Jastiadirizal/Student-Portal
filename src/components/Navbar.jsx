// TODO: answer here
import React from "react";
import { Link } from "react-router-dom";
import { Flex, Box, Text } from "@chakra-ui/react";

const NavBar = () => {
  return (
    <Flex p={6} py={"10"} pb="28">
      <Flex mx={14} alignItems="center" width="100%" justify="space-between">
        <Box bg="white" py="2" px="6" borderRadius="full" display="inline-block" boxShadow={"0 2px 4px rgba(0, 0, 0, 0.3)"} _hover={{ transform: "scale(1.03)", transition: "transform 0.2s" }}>
          <Link to="/" data-testid="home-page">
            <Text fontSize="lg" fontWeight="bold" bgGradient="linear(to-r, #68D391, #319795)" bgClip="text" className="test-link">
              Student Portal
            </Text>
          </Link>
        </Box>

        <Flex>
          <Box mx={6} color={"white"} _hover={{ transform: "scale(1.05)", textShadow: "3px 3px 2px rgba(0, 0, 0, 0.2)", transition: "transform 0.1s" }}>
            <Link to="/student" data-testid="student-page" className="test-link">
              <Text fontSize="md" fontWeight={"semibold"}>
                All Student
              </Text>
            </Link>
          </Box>

          <Box mx={6} color={"white"} _hover={{ transform: "scale(1.05)", textShadow: "3px 3px 2px rgba(0, 0, 0, 0.2)", transition: "transform 0.1s" }}>
            <Link to="/add" data-testid="add-page">
              <Text fontSize="md" fontWeight={"semibold"} className="test-link">
                Add Student
              </Text>
            </Link>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default NavBar;
