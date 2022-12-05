import { Avatar, Button, Navbar, Tooltip } from "flowbite-react";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/UserContex";

const Nabvar = () => {
  const [darkMode, setDarkMode] = useState(false);

  const changeTheme = () => {
    darkMode === true ? setDarkMode(false) : setDarkMode(true);
  };
  const { user, logout } = useContext(AuthContext);

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
                      img={
                        user.photoURL ? (
                          user.photoURL
                        ) : (
                          <Avatar rounded={true} />
                        )
                      }
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
          <div className="flex justify-center items-center">
            <label className="inline-flex relative items-center cursor-pointer">
              <input
                onClick={changeTheme}
                type="checkbox"
                value=""
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {darkMode ? "Dark" : "Light"}
              </span>
            </label>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Nabvar;
