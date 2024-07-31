import React from "react";
import PropTypes from "prop-types";

const SingleBookmark = ({ bookmark }) => {
  const { title } = bookmark;
  return (
    <div className="bg-pastel-blue-light p-2 lg:p-4 m-2 lg:m-4 rounded-md">
      <h3 className="text-3xl text-pastel-blue-dark">{title}</h3>
    </div>
  );
};

SingleBookmark.propTypes = {
  bookmark: PropTypes.object.isRequired,
};

export default SingleBookmark;
