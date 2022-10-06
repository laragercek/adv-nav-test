import {
    createBrowserRouter,
    Navigate
  } from "react-router-dom";
import {Home, Login} from '../routes';

export const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/home" replace />
  },
    {
      path: "/home",
      element: <Home/>,
    },
    {
      path: "/login",
      element: <Login/>,
    },
  ]);