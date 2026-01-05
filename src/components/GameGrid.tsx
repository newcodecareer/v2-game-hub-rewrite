import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectGenre: Genre | null
}
const GameGrid = ({selectGenre}:Props) => {
  const { data, error, isLoading } = useGames(selectGenre);
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        padding={2}>
        {data.map((game) => (
          <Skeleton key={game.id} isLoaded={!isLoading}>
            <GameCard key={game.id} game={game} />
          </Skeleton>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
