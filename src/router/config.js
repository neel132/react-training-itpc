import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Product from "../pages/Product/Product";
import ErrorPage from "../component/ErrorPage";
import Login from "../pages/Login/Login";
import Auth from "../pages/Auth";
import StyleExample from "../pages/Style/StyleExamples";
import Employee from "../pages/Employee/Employee";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Auth />,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/style',
    element: <StyleExample />
  },
  {
    path: '/employee',
    element: <Employee />
  },
  {
    path: '/*',
    element: <ErrorPage />,
  }
]);

export default router;