import { getAllFilms } from "../actions/getAllFilms";

export default async function FilmPafe() {
  const allFilms = await getAllFilms();

  return (
    <div>
      {allFilms.results.map((film) => (
          <div key={film.url}><p>{film.title}</p></div>
      ))}
    </div>
  );
}
