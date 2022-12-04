import { Button, Navbar } from "flowbite-react";
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
          <Link className="mt-2 text-xl font-bold" to="/home">
            Home
          </Link>
          <Link className="mt-2 text-xl font-bold" to="/courses">
            Courses
          </Link>
          <Link className="mt-2 text-xl font-bold" to="/blog">
            Blog
          </Link>
          <Link className="mt-2 text-xl font-bold" to="/faq">
            Faq
          </Link>
          <Button.Group>
            <Button color="purple">
              <Link to="/login">Login</Link>
            </Button>
            <Button color="purple">
              <Link to="/register">Register</Link>
            </Button>
          </Button.Group>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nabvar;
