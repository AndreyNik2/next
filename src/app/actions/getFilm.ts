import { TechFilmResponse } from "../models/ifilm";

export function getFilm(id:number): Promise<TechFilmResponse> {
  return fetch(`https://swapi.tech/api/films/${id}`).then(
    (res) => res.json()
  );
}
