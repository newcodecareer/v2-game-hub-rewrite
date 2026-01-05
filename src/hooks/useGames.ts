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

const useGames = (selectGenre: Genre | null, selectPlatform: Platform | null) =>
  useData<Game>(
    "/games",
    { params: { genres: selectGenre?.id, platforms: selectPlatform?.id } },
    [selectGenre?.id, selectPlatform?.id]
  );

export default useGames;
