import { createBrowserRouter, NavLink } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import MovieList from "../views/MovieList/MovieList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
        element: <MovieList />,
      },
    ],
  },
  {
    path: "/*",
    element: (
      <div>
        Not found 404 <NavLink to="/">Home</NavLink>
      </div>
    ),
  },
]);

export default router;
