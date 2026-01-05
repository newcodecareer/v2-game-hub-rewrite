import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import GameCard from "./GameCard";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectGenre: Genre | null;
  selectPlatform: Platform | null;
}
const GameGrid = ({ selectGenre, selectPlatform }: Props) => {
  const { data, error, isLoading } = useGames(selectGenre, selectPlatform);
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={3}
        paddingTop={2}>
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
