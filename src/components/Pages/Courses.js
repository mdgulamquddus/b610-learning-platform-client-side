import React from "react";
import { useLoaderData } from "react-router-dom";
import SideNavbar from "../Shared/SideNavbar";
import SingleCourse from "./SingleCourse";

const Courses = () => {
  const courses = useLoaderData();

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mt-5">
        <div className="lg:col-span-1 hidden lg:block">
          <SideNavbar></SideNavbar>
        </div>
        <div className="lg:col-span-4">
          <div className="grid lg:grid-cols-3 gap-3 mb-10">
            {courses.map((course) => (
              <SingleCourse key={course.id} course={course} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Courses;
