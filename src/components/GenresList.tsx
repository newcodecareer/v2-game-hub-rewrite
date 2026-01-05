import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { Button, HStack, Image, Link, List, ListItem, Spinner} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre:(genre:Genre)=>void
}

const GenresList = ({onSelectGenre}:Props) => {
  const { data, error, isLoading } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY={2}>
            <Image
              boxSize="32px"
              borderRadius={6}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button onClick={()=>onSelectGenre(genre)} whiteSpace='wrap' textAlign='left' variant='link' fontSize="lg">{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
