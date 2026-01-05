import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";

function App() {
  const [selectGenre, setSelectGenre] = useState<Genre | null>(null);
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
          <GenresList selectGenre={selectGenre} onSelectGenre={(genre) => setSelectGenre(genre)} />
        </GridItem>
      </Show>
      <GridItem area={"main"} padding={2}>
        <PlatformSelector/>
        <GameGrid selectGenre={selectGenre} />
      </GridItem>
    </Grid>
  );
}

export default App;
