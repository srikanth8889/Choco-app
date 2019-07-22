import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { NavBar } from "./NavBar";
import Header from "./Header";

function Brandsitems(props) {
  return (
    <div>
      {/* <NavBar />
      <Header /> */}
      {
        <Link to={`/brands/${props.id}`}>
          <h3>{props.name}</h3>
          <img src={props.logo} />
        </Link>
      }
    </div>
  );
}

Brandsitems.protoTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
export default Brandsitems;
