import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Shared/Navbar";
import SideNavbar from "../components/Shared/SideNavbar";

const Main = () => {
  return (
    <div className="container mx-auto">
      <Navbar></Navbar>
      <div className="grid grid-cols-5">
        <div className="col-span-1">
          <SideNavbar></SideNavbar>
        </div>
        <div className="col-span-4">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Main;
