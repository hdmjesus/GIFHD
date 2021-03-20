import React from "react";
import PropTypes from "prop-types";

const GifGridItem = ({ url, title, id }) => {
  console.log();
  return (
    <figure className="card">
      <img src={url} alt={title} />
    </figure>
  );
};

GifGridItem.propTypes = {};

export default GifGridItem;
