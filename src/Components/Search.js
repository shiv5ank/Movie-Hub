import React from "react";
import { Box, Button, Input, Center, Flex, Spacer,Heading } from "@chakra-ui/react";
import MovieDetails from "./MovieDetails";
import { useEffect, useState, useRef } from "react";
import { useData } from "./Context";
import axios from "axios";
function Search() {
  const { addMovie } = useData();
  const [query, setQuery] = useState('');

 
  const searchin = useRef(null);
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?i=${query}&apikey=703770c9`)
      
      .then((res) => {
        addMovie(res.data.Search);
      });
  }, [query,addMovie]);
  const Searchfn = () => {
    setQuery(searchin.current.value);
  };

  return (
    <Center>
      <Flex flexDirection="column">
       <Heading mt={10} style={{textShadow:"2px 2px 3px darkred", color:"black"}}>MOVIE HUB</Heading>
        <Box w="75vw" mt={30} p="10" boxShadow={"dark-lg"} rounded="lg" >
          <Flex>
            <Input w="70%" placeholder="Search for movie..." ref={searchin} />
            <Spacer />
            <Button w="25%" colorScheme="teal" onClick={Searchfn}>
              Search
            </Button>
          </Flex>
        </Box>
        <Box mt={10} p="10" boxShadow={"dark-lg"} rounded="lg" mb={10}>
          <MovieDetails />
        </Box>
      </Flex>
    </Center>
  );
}

export default Search;
