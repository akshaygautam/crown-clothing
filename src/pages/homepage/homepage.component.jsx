import React from "react";
import { Link } from "react-router-dom";
import Directory from "../../components/directory/directoy.component";
import "./homepage.styles.scss";
const HomePage = () => (
  <div className="homepage">
    <Link to="/hats"> hats </Link>
    <Directory />
  </div>
);
export default HomePage;
