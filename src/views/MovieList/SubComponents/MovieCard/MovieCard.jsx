import "./MovieCard.scss";
import { NavLink } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

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
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <h3 className="text-md md:text-lg lg:text-2xl mb-1 line-clamp-2 text-ellipsis">
                  {title}
                </h3>
              </TooltipTrigger>
              <TooltipContent>
                <p>{title}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <span className="text-white text-sm md:text-md block text-center">
            {release_date}
          </span>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div className="text-ellipsis line-clamp-4">
                <p className="text-sm md:text-md lg:text-xl">{overview}</p>
              </div>
            </TooltipTrigger>
            <TooltipContent className="flex justify-center items-center m-auto max-w-60">
              <p className="max-w-full">{overview}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>

        <div className="flex justify-between w-full">
          <span>Rating</span>
          <span>
            <span className="text-white">{vote_average.toFixed(1)}</span> /10
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

      <div className="movie-card__poster-wrapper relative">
        <Badge
          className="absolute left-3 top-3 p-2 rounded-full"
          variant="secondary">
          <span className="text-yellow-400">{vote_average.toFixed(1)}</span>
        </Badge>

        <img
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          className="movie-card__poster"
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default MovieCard;
