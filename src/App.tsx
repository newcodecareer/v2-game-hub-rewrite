import { Button, Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{ base: `'nav' 'main'`, lg: `'nav nav' 'aside main'` }}>
      <GridItem area={"nav"} bg={"red.300"}>
        nav
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg={"green.100"}>
          aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg={"gray.400"}>
        main
      </GridItem>
    </Grid>
  );
}

export default App;
