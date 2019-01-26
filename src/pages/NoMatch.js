import React from "react";
import { Link } from "react-router-dom";
import routes from "../constants/routes";

const NoMatch = () => {
  return (
    <div>
      <h1>404 Page Not found</h1>
      <Link to={routes.HOME} >Go back to main page</Link>
    </div>
  );
};

export default NoMatch;
