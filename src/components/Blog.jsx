import React from "react";
import PropTypes from "prop-types";
import { FaBookmark } from "@react-icons/all-files/fa/FaBookmark";

const Blog = ({ blog, handleAddToBookMark, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    author,
    author_img,
    hashtags,
    posted_date,
    reading_time,
  } = blog;
  console.log("Reading time:", reading_time);
  return (
    <div className="mb-20 space-y-4">
      <img className="" src={cover} alt={title}></img>
      <div className="flex justify-between m-3">
        <div className="flex">
          <img
            className="w-14 rounded-full"
            src={author_img}
            alt={author}
          ></img>
          <div className="ml-6">
            <h3 className="text-2xl text-pastel-blue-dark">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div>
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookMark(blog)}
            className="ml-2 text-2xl text-pastel-blue-dark"
          >
            <FaBookmark />
          </button>
        </div>
      </div>
      <h4 className="text-4xl font-exo-2 text-pastel-blue-dark">{title}</h4>
      <p className="text-gray-400 mt-4 mb-6">
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a href="" className="text-pastel-blue-dark">
              {hash}{" "}
            </a>
          </span>
        ))}
      </p>
      <button
        onClick={() => {
          handleMarkAsRead(id, reading_time);
        }}
        className="underline font-bold"
      >
        Mark as read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookMark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
