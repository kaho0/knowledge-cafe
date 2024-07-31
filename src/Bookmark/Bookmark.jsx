import React from "react";
import PropTypes from "prop-types";
import SingleBookmark from "./Singlebookmark";

const Bookmark = ({ bookmarks, readingTime }) => {
  return (
    <div className="p-2 lg:p-4 bg-pastel-blue">
      <div className="">
        <h3 className="text-4xl">Reading time :{readingTime} min</h3>
      </div>
      <h2 className="text-2xl text-center text-pastel-blue-dark">
        Bookmarked Blogs: {bookmarks.length}
      </h2>
      {bookmarks.map((bookmark) => (
        <SingleBookmark key={bookmark.id} bookmark={bookmark} />
      ))}
    </div>
  );
};

Bookmark.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number,
};

export default Bookmark;
