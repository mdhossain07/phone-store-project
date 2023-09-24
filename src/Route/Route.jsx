import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home";
import Favourites from "../Pages/Favourites/Favourites";
import Login from "../Pages/Login/Login";
import PhoneDetails from "../components/PhoneDetails/PhoneDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/favourites",
        element: <Favourites />,
        loader: () => fetch("../phones.json"),
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "phones/:id",
        element: <PhoneDetails />,
        loader: () => fetch("phones.json"),
      },
    ],
  },
]);

export { router };
