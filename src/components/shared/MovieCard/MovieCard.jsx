import "./MovieCard.scss";
import { NavLink } from "react-router-dom";
function MovieCard({
  title,
  poster_path,
  overview,
  vote_average,
  release_date,
}) {
  return (
    <div className="movie-card">
      <div className="movie-card__data">
        <div>
          <h3
            className="text-md md:text-lg lg:text-2xl mb-1 line-clamp-2 text-ellipsis"
            title={title}>
            {title}
          </h3>
          <span className="text-white text-sm md:text-md block text-center">
            {release_date}
          </span>
        </div>
        <div className="text-ellipsis line-clamp-4">
          <p
            title={overview}
            className="text-sm md:text-md lg:text-xl">
            {overview}
          </p>
        </div>

        <div className="flex justify-between w-full">
          <span>Rating</span>
          <span>
            {" "}
            <span className="text-white">{vote_average.toFixed(2)}</span> /10
          </span>
        </div>

        <div className="self-center">
          <NavLink
            to="/"
            className="underline text-xl hover:text-white">
            More
          </NavLink>
        </div>
      </div>

      <img
        src={`https://image.tmdb.org/t/p/original/${poster_path}`}
        className="movie-card__poster"
        loading="lazy"
      />
    </div>
  );
}

export default MovieCard;
