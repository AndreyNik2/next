import { promises } from "dns";
import { FilmsResponse, TechFilmsResponse } from "../models/ifilm";

export function getAllFilms() :Promise<FilmsResponse> {
    return fetch("https://swapi.dev/api/films", {cache : 'force-cache'}).then((res) => res.json());
}


// {cache : 'force-cache'} = SSG getStaticProps
// {cache : 'no-store'} = SSR = getServerSiteProps
// {next: {revalidate: 60}} = ISR getStaticProps + revalidate

export function getTechAllFilms(): Promise<TechFilmsResponse> {
  return fetch("https://swapi.tech/api/films", { cache: "force-cache" }).then(
    (res) => res.json()
  );
}