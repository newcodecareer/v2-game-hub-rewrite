import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre:Genre|null
  platform: Platform | null
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)
  // const [selectGenre, setSelectGenre] = useState<Genre | null>(null);
  // const [selectPlatform, setSelectPlatform] = useState<Platform | null>(null);

  return (
    <Grid
      templateAreas={{ base: `'nav' 'main'`, lg: `'nav nav' 'aside main'` }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}>
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} padding={3}>
          <GenresList
            selectGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({...gameQuery, genre:genre})}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"} padding={2}>
        <PlatformSelector
          selectPlatform={gameQuery.platform}
          onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform:platform})}
        />
        <GameGrid gameQuery= {gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
