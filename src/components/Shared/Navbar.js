import { Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Nabvar = () => {
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Navbar.Brand>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Wedemy
          </span>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link to="/home">Home</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/faq">Faq</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">register</Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nabvar;
