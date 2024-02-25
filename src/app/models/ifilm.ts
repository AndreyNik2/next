interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}
export interface FilmsResponse {
  count: number;
  next: number | null;
  previous: number | null;
  results: Film[];
}
export interface TechFilm {
  properties: FilmProperties;
  description: string;
  _id: string;
  uid: string;
  __v: number;
}
interface FilmProperties {
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  producer: string;
  title: string;
  episode_id: number;
  director: string;
  release_date: string;
  opening_crawl: string;
  url: string;
}
export interface TechFilmsResponse {
  message: string;
  result: TechFilm[];
}

export interface TechFilmResponse {
  message: string;
  result: TechFilm;
}
