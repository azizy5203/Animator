import axios from "axios";
import { useState, useEffect } from "react";
import MovieCard from "./SubComponents/MovieCard/MovieCard";

import { useTranslation } from "react-i18next";

function MovieList() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

  const { t, i18n } = useTranslation();

  useEffect(() => {
    async function getMoviesList() {
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=37ed43a4f8eaa2abd75f9283692947bc&with_genres=16&language=en-US&page=${page}`
        );
        setList([...list, ...data.results]);
      } catch (error) {
        console.error(error);
      }
    }

    getMoviesList();
  }, [page]);

  return (
    <div className="px-4 flex flex-col gap-4 container mx-auto mt-4">
      <h3 className="text-4xl text-white">{t("InCenimas")}:</h3>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
        {list.map((item) => {
          return (
            <MovieCard
              {...item}
              key={item.id}
            />
          );
        })}
      </div>
      <button onClick={() => setPage(page + 1)}>load more</button>
    </div>
  );
}

export default MovieList;
