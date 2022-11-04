import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{ margin: "2rem", textAlign: "center", paddingBottom: "1rem" }}>
      <h1>Oops!! You seem to be lost.</h1>
      <p>But you can be found! Here are some helpful links:</p>
      <ul>
        <li style={{ listStyle: "none" }}>
          {" "}
          <Link to="/">Home</Link>{" "}
        </li>
      </ul>
    </div>
  );
};

export default NotFound;