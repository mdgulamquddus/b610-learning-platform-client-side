import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Pages/Home";
import Courses from "../components/Pages/Courses";
import Error404 from "../components/Pages/Error404";
import Blog from "../components/Pages/Blog";
import Faq from "../components/Pages/Faq";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";
import CourseDetails from "../components/Pages/CourseDetails";
import Checkout from "../components/Pages/Checkout";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error404></Error404>,
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/home",
        element: <Home></Home>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: () =>
          fetch("https://wedemy-server-mdgulamquddus.vercel.app/courses"),
      },
      {
        path: "/course/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) =>
          fetch(
            `https://wedemy-server-mdgulamquddus.vercel.app/course/${params.id}`
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
        loader: () =>
          fetch("https://wedemy-server-mdgulamquddus.vercel.app/blogs"),
      },
      {
        path: "/faq",
        element: <Faq></Faq>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://wedemy-server-mdgulamquddus.vercel.app/course/${params.id}`
          ),
      },
    ],
  },
]);
