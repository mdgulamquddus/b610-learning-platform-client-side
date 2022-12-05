import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto text-center my-8">
      <div className="mb-5 ">
        <h2 className="text-5xl font-extrabold mb-2">
          Welcome To E-Learning Online Education
        </h2>
        <Link className="inline-block mt-4" to="/courses">
          <Button color="purple">Explore Our Courses</Button>
        </Link>
      </div>
      <img
        className="w-3/4 mx-auto"
        src="https://www.itechscripts.com/blog/wp-content/uploads/2022/09/elearning.png"
        alt=""
      />
    </div>
  );
};

export default Home;
