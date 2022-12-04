import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/UserContex";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const { signinUser, signinWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;
    signinUser(email, password)
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleSigninGoogle = () => {
    signinWithGoogle()
      .then((resutl) => {
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container mx-auto w-2/4 translate-y-40 border border-orange-100 rounded-md py-10 px-5 shadow-md">
      <h2 className="text-2xl font-bold my-2 text-center">Please Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Enter Your Email Address</label>
          <input
            className="border rounded-md focus:outline-orange-200 py-1"
            type="email"
            name="email"
            id="email"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Enter Your Password</label>
          <input
            className="border rounded-md focus:outline-orange-200 py-1"
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
          Login
        </button>
        <div className="mt-3 text-green-600 font-bold">
          {/* {success ? <p>{success}</p> : null} */}
        </div>
        <div className="my-3">
          <span className="mr-1 ">Don't Have An Account?</span>
          <NavLink className="text-red-400 font-bold" to="/register">
            Please Register
          </NavLink>
        </div>
      </form>
      <hr className="my-7" />
      <h2 className="text-xl text-center font-semibold mb-3">
        Sign In with Google and Github
      </h2>
      <div className="flex gap-5 items-center justify-center">
        <FaGoogle
          onClick={handleSigninGoogle}
          className="text-4xl cursor-pointer"
        />
        <FaGithub className="text-4xl cursor-pointer" />
      </div>
    </div>
  );
};

export default Login;
