import { Badge, Rating } from "flowbite-react";
import React, { createRef } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

import Pdf from "react-to-pdf";

const ref = createRef();
const CourseDetails = () => {
  const course = useLoaderData();
  const {
    name,
    title,
    creator,
    badge,
    ratings,
    requirements,
    students,
    imgUrl,
  } = course;
  console.log(course);
  return (
    <div className="w-3/4 mx-auto my-5 p-4 border border-gray-200 rounded-md">
      <div className="flex justify-end">
        <Pdf targetRef={ref} filename="course.pdf">
          {({ toPdf }) => (
            <FaCloudDownloadAlt
              onClick={toPdf}
              className="text-4xl text-red-500 cursor-pointer"
            />
          )}
        </Pdf>
      </div>
      <div ref={ref}>
        <h1 className="text-4xl font-extrabold mb-2">{name}</h1>
        <img className="w-full mb-2" src={imgUrl} alt="" />
        <p className="my-5">{title}</p>
        <div className="flex items-center gap-2">
          <span className="inline-block">
            <Badge color="warning">{badge}</Badge>
          </span>
          <span className="inline-block">
            <Rating>
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star filled={false} />
              <p className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                {ratings} out of 5
              </p>
            </Rating>
          </span>
          <span className="inline-block">
            <Badge color="gray">Purchage Students {students}</Badge>
          </span>
        </div>
        <p className="my-3">Created by : {creator}</p>
        <div>
          <h3 className="text-2xl font-bold mb-2">Requirements</h3>
          {requirements.map((req) => (
            <ul key={req.req_id} className="ml-4">
              <li>- {req.title}</li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
