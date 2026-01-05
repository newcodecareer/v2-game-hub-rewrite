import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGameRes {
  count: number;
  results: Game[];
}

const useGames = (selectGenre:Genre|null) => useData<Game>("/games",{params:{genres:selectGenre?.id}},[selectGenre?.id]);

export default useGames;
