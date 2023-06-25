import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import { Box, TableContainer, Table, Thead, Tbody, Tr, Th, Td, Text, Select, Spinner, Button } from "@chakra-ui/react";
import backgroundImage from "../img/discuss.jpg";

const Student = () => {
  const itemsPerPage = 10;

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  const [update, setUpdate] = useState(1);
  const [selectFaculty, setSelectFaculty] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch("https://6497a1299543ce0f49e14cfd.mockapi.io/studentData/")
      .then((response) => response.json())
      .then((json) => {
        setStudents(json);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
        setUpdate((prevUpdate) => prevUpdate + 1);
      });
  }, [update]);

  const handleFilterChange = (e) => {
    setSelectFaculty(e.target.value);
  };

  const filterStudentByFaculty = (students) => {
    if (selectFaculty === "All") {
      return students;
    } else {
      return students.filter((student) => student.faculty === selectFaculty);
    }
  };

  const filteredStudents = filterStudentByFaculty(students);

  const totalPages = Math.ceil(filteredStudents.length / itemsPerPage);

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = filteredStudents.slice(startIndex, endIndex);

  async function deleteStudent(stdId) {
    try {
      await fetch(`https://6497a1299543ce0f49e14cfd.mockapi.io/studentData/${stdId}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.log(error);
      console.log("Terjadi kesalahan saat delete student");
    }
  }

  async function handleDelete(id) {
    try {
      await deleteStudent(id);
      setUpdate(update + 1);
    } catch (error) {
      console.log(error);
      console.log("Terjadi kesalahan saat delete student");
    }
  }

  return (
    <Box
      bgImage={`linear-gradient(to bottom, rgba(0, 128, 128, 0.6), rgba(0, 0, 139, 0.6)), url(${backgroundImage})`}
      // bgGradient="linear(to right, green.300, teal.500)"
      // bgColor={"green.300"}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      minHeight="100vh"
    >
      <NavBar />

      {loading ? (
        <Box display="flex" justifyContent="center" alignItems="center" height="500px">
          <Text mr={"4"} fontWeight={"semibold"} fontSize="xl" color={"white"}>
            Loading ...
          </Text>
          <Spinner thickness="5px" speed="0.65s" emptyColor="gray.300" color="white" size="xl" />
        </Box>
      ) : (
        <Box bg="white" p={8} maxW="max-content" mx="auto" borderRadius="xl" boxShadow="dark-lg" minHeight="90vh" maxWidth="5xl">
          <Box display="flex" justifyContent="space-between">
            <Box flex="1">
              <Text as="h1" fontSize="lg" fontWeight="semibold" alignItems="center">
                All student
              </Text>
            </Box>
            <Box flex="1" ml={3}>
              <Select data-testid="filter" value={selectFaculty} onChange={handleFilterChange} rounded="md" borderWidth="1px" borderColor="black" fontSize="sm">
                <option value="All">All</option>
                <option value="Fakultas Ekonomi">Fakultas Ekonomi</option>
                <option value="Fakultas Ilmu Sosial dan Politik">Fakultas Ilmu Sosial dan Politik</option>
                <option value="Fakultas Teknik">Fakultas Teknik</option>
                <option value="Fakultas Teknologi Informasi dan Sains">Fakultas Teknologi Informasi dan Sains</option>
              </Select>
            </Box>
          </Box>

          <Box overflowX="auto">
            <TableContainer pt={10} fontSize="sm" maxWidth="full">
              <Table variant="striped" id="table-student" width="full">
                <Thead>
                  <Tr>
                    <Th fontSize="14" fontWeight="bold" textAlign="center">
                      No
                    </Th>
                    <Th fontSize="14" fontWeight="bold" textAlign="center">
                      Full Name
                    </Th>
                    <Th fontSize="14" fontWeight="bold" textAlign="center">
                      Faculty
                    </Th>
                    <Th fontSize="14" fontWeight="bold" textAlign="center">
                      Program Study
                    </Th>
                    <Th fontSize="14" fontWeight="bold" textAlign="center" colSpan={2}>
                      Option
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {currentData.map((student) => (
                    <Tr key={student.id} className="student-data-row">
                      <Td textAlign="center">{student.id}</Td>
                      <Td>
                        <Link to={`/student/${student.id}`}>{student.fullname}</Link>
                      </Td>
                      <Td>{student.faculty}</Td>
                      <Td>{student.programStudy}</Td>
                      <Td>
                        <Button type="button" id="delete-btn" data-testid={`delete-${student.id}`} onClick={() => handleDelete(student.id)} colorScheme="red" size={"xs"} borderRadius={"base"} mr={4}>
                          Delete
                        </Button>
                        <Link to={`/student/${student.id}`}>
                          <Button type="button" id="edit-btn" colorScheme="blue" data-testid={`delete-${student.id}`} size={"xs"} borderRadius={"base"}>
                            Edit
                          </Button>
                        </Link>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>

          <Box display="flex" justifyContent="center" my={1} mt={4}>
            <Button disabled={currentPage === 1} onClick={handlePrevPage} colorScheme="teal" mr={2} size={"sm"}>
              Prev
            </Button>
            <Button disabled={currentPage === totalPages} onClick={handleNextPage} colorScheme="teal" ml={2} size={"sm"}>
              Next
            </Button>
          </Box>
        </Box>
      )}
      <Footer />
    </Box>
  );
};

export default Student;
