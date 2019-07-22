import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function ChocolateListItem(props) {
  console.log(props);
  return (
    <div className="box columns os one-third">
      {
        <Link to={`/chocolates/${props.id}`}>
          <h4>{props.name}</h4>
          <img src={props.image} />
        </Link>
      }
    </div>
  );
}
ChocolateListItem.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default ChocolateListItem;
