import { Avatar, Button, Navbar, Tooltip } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContex";

const Nabvar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <Navbar fluid={true} rounded={true}>
        <Link to="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Wedemy
          </span>
        </Link>

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

          {user && user.uid ? (
            <div>
              <div className="flex flex-wrap gap-2">
                {user && user.photoURL ? (
                  <Tooltip
                    content={
                      user.displayName ? user.displayName : "Name Not Found"
                    }
                  >
                    <Avatar
                      img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      rounded={true}
                    />
                  </Tooltip>
                ) : (
                  <Tooltip
                    content={
                      user.displayName ? user.displayName : "Name Not Found"
                    }
                  >
                    <Avatar rounded={true} />
                  </Tooltip>
                )}
                <Button onClick={logout} color="purple">
                  <Link>Logout</Link>
                </Button>
              </div>
            </div>
          ) : (
            <Button.Group>
              <Button color="purple">
                <Link to="/login">Login</Link>
              </Button>
              <Button color="purple">
                <Link to="/register">Register</Link>
              </Button>
            </Button.Group>
          )}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nabvar;
