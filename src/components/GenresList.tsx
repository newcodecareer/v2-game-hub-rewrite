import React from "react";
import useGenres from "../hooks/useGenres";
import { Text } from "@chakra-ui/react";

const GenresList = () => {
  const { data, error, isLoading } = useGenres();
  return (
    <ul>
      {data.map((g) => (
        <Text key={g.id}>{g.name}</Text>
      ))}
    </ul>
  );
};

export default GenresList;
