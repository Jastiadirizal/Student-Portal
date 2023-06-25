import { useState, useEffect } from "react";
import React from "react";
import NavBar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Flex, FormControl, FormLabel, Image, Input, Select, Spinner, Heading, Text } from "@chakra-ui/react";
import Footer from "../components/Footer";
import backgroundImage from "../img/discuss.jpg";

const EditStudent = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const fetchingStudent = async () => {
      try {
        const response = await fetch(`https://6497a1299543ce0f49e14cfd.mockapi.io/studentData/${id}`);
        const data = await response.json();
        setStudent(data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchingStudent();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    let faculty = "";

    if (name === "programStudy") {
      switch (value) {
        case "Ekonomi":
        case "Manajemen":
        case "Akuntansi":
          faculty = "Fakultas Ekonomi";
          break;
        case "Administrasi Publik":
        case "Administrasi Bisnis":
        case "Hubungan Internasional":
          faculty = "Fakultas Ilmu Sosial dan Politik";
          break;
        case "Teknik Sipil":
        case "Arsitektur":
          faculty = "Fakultas Teknik";
          break;
        case "Matematika":
        case "Fisika":
        case "Informatika":
          faculty = "Fakultas Teknologi Informasi dan Sains";
          break;
        default:
          faculty = "";
          break;
      }
    }
    setStudent((previewStudent) => ({ ...previewStudent, [name]: value, faculty }));
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://6497a1299543ce0f49e14cfd.mockapi.io/studentData/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(student),
      });
      const data = await response.json();
      navigate("/student");
    } catch (error) {
      setError(error);
    }
  };

  return (
    <>
      <Box
        bgImage={`linear-gradient(to bottom, rgba(0, 128, 128, 0.6), rgba(0, 0, 139, 0.6)), url(${backgroundImage})`}
        // bgGradient="linear(to right, green.300, teal.500)"
        // bgColor={"green.300"}
        bgSize="cover"
        bgPosition="center"
        bgRepeat="no-repeat"
        minHeight="100%"
      >
        <NavBar />

        {loading ? (
          <Box display="flex" justifyContent="center" alignItems="center" height="1000px">
            <Text mr={"4"} fontWeight={"semibold"} fontSize="xl" color={"white"}>
              Loading ...
            </Text>
            <Spinner thickness="5px" speed="0.65s" emptyColor="gray.300" color="white" size="xl" />
          </Box>
        ) : (
          <Box bg="white" p={10} maxW="max-content" mx="auto" borderRadius={"xl"} boxShadow={"dark-lg"} minWidth="800">
            <Heading fontSize={"2xl"} fontWeight={"semibold"} textAlign="center">
              Edit Student
            </Heading>
            <Flex mt="14" flexDirection={"column"}>
              <Box justifyContent="center" alignItems="center">
                <Image as={"img"} src={student.profilePicture} alt="Profile Picture" border={"4px"} borderRadius="md" boxSize="180px" mx="auto"></Image>
                <img />
              </Box>

              <Box mt={10}>
                <form onSubmit={submit}>
                  <Flex justifyContent="space-between" mb={5}>
                    <FormControl flex="1" mr={"5"}>
                      <FormLabel fontWeight="semibold" htmlFor="fullname">
                        Full Name
                      </FormLabel>
                      <Input fontSize={"sm"} type="text" id="fullname" name="fullname" value={student.fullname} onChange={handleChange} data-testid="name" borderBottomWidth="1px" borderColor="black" />
                    </FormControl>

                    <FormControl flex="1" ml={5}>
                      <FormLabel fontWeight="semibold" htmlFor="profilePicture">
                        Profile Picture
                      </FormLabel>
                      <Input fontSize={"sm"} type="text" id="profilePicture" name="profilePicture" value={student.profilePicture} onChange={handleChange} data-testid="profilePicture" borderBottomWidth="2px" borderColor="black" />
                    </FormControl>
                  </Flex>

                  <Flex justifyContent="space-between" mb={5}>
                    <FormControl flex="1" mr={5}>
                      <FormLabel fontWeight="semibold" htmlFor="address">
                        Address
                      </FormLabel>
                      <Input fontSize={"sm"} type="text" id="address" name="address" value={student.address} onChange={handleChange} data-testid="address" borderBottomWidth="2px" borderColor="black" />
                    </FormControl>

                    <FormControl flex="1" ml={"5"}>
                      <FormLabel fontWeight="semibold" htmlFor="phoneNumber">
                        Phone Number
                      </FormLabel>
                      <Input fontSize={"sm"} type="text" id="phoneNumber" name="phoneNumber" value={student.phoneNumber} onChange={handleChange} data-testid="phoneNumber" borderBottomWidth="2px" borderColor="black" />
                    </FormControl>
                  </Flex>

                  <Flex justifyContent="space-between" mb={5}>
                    <FormControl flex="1" mr={5}>
                      <FormLabel fontWeight="semibold" htmlFor="birthDate">
                        Birth Date
                      </FormLabel>
                      <Input fontSize={"sm"} type="text" id="birthDate" name="birthDate" value={student.birthDate} onChange={handleChange} data-testid="date" borderBottomWidth="2px" borderColor="black" />
                    </FormControl>

                    <FormControl flex="1" ml={5}>
                      <FormLabel fontWeight="semibold" htmlFor="gender">
                        Gender
                      </FormLabel>
                      <Select fontSize={"sm"} type="text" id="gender" name="gender" value={student.gender} onChange={handleChange} data-testid="gender" borderBottomWidth="2px" borderColor="black">
                        <option value="">Option Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                      </Select>
                    </FormControl>
                  </Flex>

                  <FormControl>
                    <FormLabel fontWeight="semibold" htmlFor="programStudy">
                      Program Study
                    </FormLabel>
                    <Select fontSize={"sm"} name="programStudy" id="programStudy" data-testid="prody" value={student.programStudy} onChange={handleChange} borderBottomWidth="2px" borderColor="black" width="100%">
                      <option value="Ekonomi">Ekonomi</option>
                      <option value="Manajemen">Manajemen</option>
                      <option value="Akuntansi">Akuntansi</option>
                      <option value="Administrasi Publik">Administrasi Publik</option>
                      <option value="Administrasi Bisnis">Administrasi Bisnis</option>
                      <option value="Hubungan Internasional">Hubungan Internasional</option>
                      <option value="Teknik Sipil">Teknik Sipil</option>
                      <option value="Arsitektur">Arsitektur</option>
                      <option value="Matematika">Matematika</option>
                      <option value="Fisika">Fisika</option>
                      <option value="Informatika">Informatika</option>
                    </Select>
                  </FormControl>

                  <Button as={"button"} type="submit" data-testid="edit-btn" colorScheme="blue" mt={6} size={"md"}>
                    Edit Student
                  </Button>
                </form>
              </Box>
            </Flex>
          </Box>
        )}
        <Footer />
      </Box>
    </>
  );
};

export default EditStudent;
