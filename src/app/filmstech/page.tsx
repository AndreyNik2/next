import Link from "next/link";
import { getAllFilms, getTechAllFilms } from "../actions/getAllFilms";

export default async function FilmPafe() {
  const allFilms = await getTechAllFilms();

  return (
    <div>
      {allFilms.result.map((film) => (
        <div key={film.uid}>
          <Link href={`filmstech/${film.uid}`}>
            {film.properties.title}
          </Link>
        </div>
      ))}
    </div>
  );
}
