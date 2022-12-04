import { Button, Card } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SingleCourse = ({ course }) => {
  const { name, imgUrl, id } = course;
  return (
    <div>
      <div className="max-w-sm">
        <Card imgSrc={imgUrl}>
          <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <Link to={`/course/${id}`}>
            <Button color="purple">Course Details</Button>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default SingleCourse;
