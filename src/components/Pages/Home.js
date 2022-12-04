import React, { useContext } from "react";
import { AuthContext } from "../../context/UserContex";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      <h1>This is home Component</h1>
    </div>
  );
};

export default Home;
