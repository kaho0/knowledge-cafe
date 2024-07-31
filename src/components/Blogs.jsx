import React, { useEffect, useState } from "react";
import Blog from "./Blog";
import PropTypes from "prop-types";

const Blogs = ({ handleAddToBookMark, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched blogs:", data);
        setBlogs(data);
      });
  }, []);

  return (
    <div className="m-6">
      <h2 className="text-2xl font-semibold m-4">Blogs: {blogs.length}</h2>
      <div className="space-y-4">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleAddToBookMark={handleAddToBookMark}
            handleMarkAsRead={handleMarkAsRead}
          />
        ))}
      </div>
    </div>
  );
};

Blogs.propTypes = {
  handleAddToBookMark: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blogs;
