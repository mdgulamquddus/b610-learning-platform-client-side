import React from "react";
import { Outlet } from "react-router-dom";
import Nabvar from "../components/Shared/Shared/Nabvar";

const Main = () => {
  return (
    <div>
      <Nabvar></Nabvar>
      <div></div>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
