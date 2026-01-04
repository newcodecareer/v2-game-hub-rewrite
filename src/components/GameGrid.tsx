import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={2}
        padding={2}>
        {games.map((game) => (
          <Skeleton isLoaded={!isLoading}>
            <GameCard key={game.id} game={game} />
          </Skeleton>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
