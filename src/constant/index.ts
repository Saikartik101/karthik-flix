import { CustomGenre } from "src/types/Genre";

export const API_ENDPOINT_URL = "https://api.themoviedb.org/3";
export const TMDB_V3_API_KEY = "ef68a2b2980b0998d969aecfd2a29146";

export const ARROW_MAX_WIDTH = 60;
export const COMMON_TITLES: CustomGenre[] = [
  { name: "Popular", apiString: "popular" },
  { name: "Top Rated", apiString: "top_rated" },
  { name: "Now Playing", apiString: "now_playing" },
  { name: "Upcoming", apiString: "upcoming" },
];

export const YOUTUBE_URL = "https://www.youtube.com/watch?v=";
