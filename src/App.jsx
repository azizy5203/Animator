import { RouterProvider } from "react-router-dom";
import router from "@/router/index";
import Loader from "@/components/shared/Loader/Loader";

function App() {
  return (
    <RouterProvider
      fallbackElement={<Loader />}
      router={router}
    />
  );
}

export default App;
