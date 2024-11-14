import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Orders from "../components/Orders";
import PrivateRoutes from "./PrivateRoutes";
import Profile from "../components/Profile";


const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "login",
          element: <Login></Login>,
        },
        {
          path: "register",
          element: <Register></Register>,
        },
        {
          path: "orders",
          element: (
            <PrivateRoutes>
              <Orders></Orders>
            </PrivateRoutes>
          ),
        },
        {
          path: 'profile',
          element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
        }
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_relativeSplatPath: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  }
);


export default router;