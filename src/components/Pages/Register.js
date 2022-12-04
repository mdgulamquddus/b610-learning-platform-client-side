import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/UserContex";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="container mx-auto w-2/4 translate-y-40 border border-orange-100 rounded-md py-10 px-5 shadow-md">
        <h2 className="text-2xl font-bold my-2 text-center">Please Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label htmlFor="email">Enter Your Email Address</label>
            <input
              className="border rounded-md focus:outline-orange-200 py-1 px-2"
              type="email"
              name="email"
              id="email"
              required
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password">Enter Your Password</label>
            <input
              className="border rounded-md focus:outline-orange-200 py-1 px-2"
              type="password"
              name="password"
              id="password"
              required
            />
          </div>
          <button
            className="mt-2 py-2 px-5 bg-red-400 rounded-lg text-white font-bold"
            type="submit"
          >
            Register
          </button>
          <div>
            {/* {userExit ? <p className="my-3 text-red-700">{userExit}</p> : ""} */}
          </div>
          <div className="my-3">
            <span className="mr-1 ">You Have Already Account</span>
            <NavLink className="text-red-400 font-bold" to="/login">
              Please Login
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
