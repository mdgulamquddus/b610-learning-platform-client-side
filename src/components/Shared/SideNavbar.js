import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SideNavbar = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/courses")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);
  return (
    <div>
      <h1>All Courses</h1>
      {items.map((item) => (
        <Link
          to={`/course/${item.id}`}
          className="block border border-gray-500 rounded-sm my-2 p-2"
          key={item.id}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default SideNavbar;
