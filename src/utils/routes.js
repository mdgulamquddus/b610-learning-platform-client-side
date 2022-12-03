import Main from "../layout/Main";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [],
  },
]);
