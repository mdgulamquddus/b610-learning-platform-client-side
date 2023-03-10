import { Badge, Button, Rating } from "flowbite-react";
import React, { createRef } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

import Pdf from "react-to-pdf";

const ref = createRef();
const CourseDetails = () => {
  const course = useLoaderData();
  const {
    id,
    name,
    title,
    creator,
    badge,
    ratings,
    requirements,
    students,
    imgUrl,
    learn_option,
    price,
  } = course;
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
        <p className="my-5 text-xl font-semibold">{title}</p>
        <div className="flex lg:flex-row flex-col items-center gap-2">
          <span className="inline-block">
            <Badge color="warning">{badge}</Badge>
          </span>
          <span className="inline-block my-2">
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
        <p className="text-xl font-bold text-purple-600 my-3">
          Price : {price} €
        </p>
        <div>
          <h3 className="text-2xl font-bold mb-2">What Wil You Learn</h3>
          {learn_option.map((item, idx) => (
            <ul className="mt-2" key={idx}>
              <li>
                <span className="mr-2">&#10004;</span>
                {item}
              </li>
            </ul>
          ))}
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-2 mt-2">Requirements</h3>
          {requirements.map((req) => (
            <ul key={req.req_id} className="ml-4">
              <li>- {req.title}</li>
            </ul>
          ))}
        </div>
      </div>
      <Link to={`/checkout/${id}`} className="my-4 block">
        <Button color="purple">Get Premium Access</Button>
      </Link>
    </div>
  );
};

export default CourseDetails;
