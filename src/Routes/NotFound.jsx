// TODO: answer here
import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Button, Text, Flex } from "@chakra-ui/react";

const NotFound = () => {
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <Box bgColor={"green.300"} bgSize="cover" bgPosition="center" bgRepeat="no-repeat" minHeight="100vh" display="flex" justifyContent="center" alignItems="center">
        <Flex flexDirection="column" justifyContent="center" alignItems="center">
          <Text color="white" fontSize="5xl">
            404 | Not Found
          </Text>
          <Button mt={"5"} borderRadius="md" colorScheme="teal" onClick={handleBackClick} data-testid="back" width="50%">
            Back
          </Button>
        </Flex>
      </Box>
    </>
  );
};

export default NotFound;
