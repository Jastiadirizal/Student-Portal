import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/Navbar";
import { Box, Button, FormControl, FormLabel, Input, Select, Heading } from "@chakra-ui/react";
import Footer from "../components/Footer";
import backgroundImage from "../img/discuss.jpg";

const AddStudent = () => {
  const navigate = useNavigate();
  const [student, setStudent] = useState({ fullname: "", profilePicture: "", address: "", birthDate: "", gender: "", phoneNumber: "", faculty: "", programStudy: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevStudent) => ({ ...prevStudent, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();

    try {
      const url = "https://6497a1299543ce0f49e14cfd.mockapi.io/studentData/";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...student,
          faculty: getFaculty(student.programStudy),
        }),
      });
      const data = await response.json();
      navigate("/student");
    } catch (error) {
      setError(error);
    }
  };

  const getFaculty = (programStudy) => {
    switch (programStudy) {
      case "Ekonomi":
        return "Fakultas Ekonomi";

      case "Manajemen":
        return "Fakultas Ekonomi";

      case "Akuntansi":
        return "Fakultas Ekonomi";

      case "Administrasi Publik":
        return "Fakultas Ilmu Sosial dan Politik";

      case "Administrasi Bisnis":
        return "Fakultas Ilmu Sosial dan Politik";

      case "Hubungan Internasional":
        return "Fakultas Ilmu Sosial dan Politik";

      case "Teknik Sipil":
        return "Fakultas Teknik";

      case "Arsitektur":
        return "Fakultas Teknik";

      case "Matematika":
        return "Fakultas Teknologi Informasi dan Sains";

      case "Fisika":
        return "Fakultas Teknologi Informasi dan Sains";

      case "Informatika":
        return "Fakultas Teknologi Informasi dan Sains";
      default:
        return "";
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
        height="100%"
      >
        <NavBar />
        <Box bg="white" p={10} maxW="max-content" mx="auto" borderRadius={"xl"} boxShadow={"dark-lg"} minHeight="100vh" minWidth="800" width="100%">
          <Heading fontSize={"2xl"} fontWeight="semibold" textAlign="center" mb={8}>
            Add Student
          </Heading>

          <form onSubmit={submit}>
            <FormControl mb={4} isRequired>
              <FormLabel fontWeight="semibold" htmlFor="fullname" className="font-bold">
                Fullname
              </FormLabel>
              <Input fontSize="sm" borderColor={"black"} type="text" id="fullname" data-testid="name" name="fullname" value={student.fullname} onChange={handleChange} required placeholder="Fullname" />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel fontWeight="semibold" htmlFor="profilePicture">
                Profile Picture
              </FormLabel>
              <Input fontSize="sm" borderColor={"black"} type="text" id="profilePicture" data-testid="profilePicture" name="profilePicture" value={student.profilePicture} onChange={handleChange} placeholder="Image url" />
            </FormControl>

            <FormControl mb={4} isRequired>
              <FormLabel fontWeight="semibold" htmlFor="address">
                Address
              </FormLabel>
              <Input fontSize="sm" borderColor={"black"} type="text" id="address" data-testid="address" name="address" value={student.address} onChange={handleChange} placeholder="Address" />
            </FormControl>

            <FormControl mb={4} isRequired>
              <FormLabel fontWeight="semibold" htmlFor="input-phoneNumber">
                PhoneNumber
              </FormLabel>
              <Input fontSize="sm" borderColor={"black"} type="text" id="input-phoneNumber" data-testid="phoneNumber" name="phoneNumber" value={student.phoneNumber} onChange={handleChange} placeholder="+62xxxxxxxxxxx" />
            </FormControl>

            <FormControl mb={4} isRequired>
              <FormLabel fontWeight="semibold" htmlFor="input-date">
                Birth Date
              </FormLabel>
              <Input fontSize="sm" borderColor={"black"} type="date" id="input-date" data-testid="date" name="birthDate" value={student.birthDate} onChange={handleChange} />
            </FormControl>

            <FormControl mb={4} isRequired>
              <FormLabel fontWeight="semibold" htmlFor="input-gender">
                Gender
              </FormLabel>
              <Select fontSize="sm" borderColor={"black"} name="gender" id="input-gender" data-testid="gender" value={student.gender} onChange={handleChange} placeholder="Gender Option">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </Select>
            </FormControl>

            <FormControl mb={4} isRequired>
              <FormLabel fontWeight="semibold" htmlFor="input-prody">
                Program Study
              </FormLabel>
              <Select fontSize="sm" borderColor={"black"} name="programStudy" id="input-prody" data-testid="prody" value={student.programStudy} onChange={handleChange} placeholder="Select Prody">
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

            <Button type="submit" value="Add student" data-testid="add-btn" colorScheme="blue" mt={3} size="md" isFullWidth>
              Add Student
            </Button>
          </form>
        </Box>
        <Footer />
      </Box>
    </>
  );
};
export default AddStudent;
