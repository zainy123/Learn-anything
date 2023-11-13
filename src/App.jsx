import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Nothing from "./components/Nothing";
import Collections from "./components/Collections/Collections";
import Videos from "./components/Videos/Videos";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/nothing",
    element: <Nothing />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/collections",
    element: <Collections />,
  },
  {
    path: "/videos",
    element: <Videos />,
  },
  {
    path: "/imagegallery/:query",
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
