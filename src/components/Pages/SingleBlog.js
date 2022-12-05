import React from "react";

const SingleBlog = ({ blog }) => {
  const { question, answer } = blog;
  return (
    <div className="border border-gray-200 rounded-md p-5 ">
      <h2 className="mb-3 text-lg font-semibold">{question}</h2>
      <p>{answer}</p>
    </div>
  );
};

export default SingleBlog;
