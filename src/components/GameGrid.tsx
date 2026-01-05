import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
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
