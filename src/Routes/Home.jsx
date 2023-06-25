import React from "react";
import { Link } from "react-router-dom";
import { Box, Flex, Button, Heading, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import backgroundImage from "../img/discuss.jpg";

const Home = () => {
  return (
    <>
      <Box
        bgImage={`linear-gradient(to bottom, rgba(0, 128, 128, 0.6), rgba(0, 0, 139, 0.6)), url(${backgroundImage})`}
        // bgGradient="linear(to right, green.300, teal.500)"
        // bgColor={"green.300"}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        minHeight="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Flex flexDirection="row">
          <Box color="white">
            <Flex flexDirection="row">
              <Box borderRight={"4px"} mr={5}>
                <Heading fontSize="2xl" mr={5} fontWeight={"light"} fontStyle={"italic"}>
                  Studi Independen
                </Heading>
                <Heading fontSize="2xl" mr={5} fontWeight={"light"} fontStyle={"italic"}>
                  Kampus Merdeka
                </Heading>
                <Heading fontSize="2xl" mr={5}>
                  <Text as="span" fontWeight={"light"} mr={"2"}>
                    by
                  </Text>
                  Ruangguru
                </Heading>
              </Box>

              <Box alignContent={"center"}>
                <Heading fontSize="2xl" fontWeight="semibold" pt={"2"} pb={"2"}>
                  Student Portal
                </Heading>
                <Link to="/student">
                  <Button colorScheme="teal" data-testid="student-btn" size={"md"}>
                    All Student
                  </Button>
                </Link>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box mt={"-24"}>
        <Footer />
      </Box>
    </>
  );
};

export default Home;
