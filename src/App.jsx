import React, { useState } from "react";
import "./index.css"; // Ensure the path is correct
import Header from "./header/Header";
import Blogs from "./components/Blogs";
import Bookmark from "./Bookmark/Bookmark";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookMark = (blog) => {
    const newBookMark = [...bookmarks, blog];
    setBookmarks(newBookMark);
  };

  const handleMarkAsRead = (time) => {
    console.log("Adding reading time:", time);
    setReadingTime((prevTime) => {
      const newTime = prevTime + time;
      console.log("New reading time:", newTime);
      return newTime;
    });
  };

  return (
    <div className="bg-pastel-blue-light min-h-screen">
      <Header />
      <div className="flex flex-col lg:flex-row max-w-7xl mx-auto p-2 lg:p-4 border-b-2">
        <div className="flex-grow lg:w-2/3 lg:pr-2">
          <Blogs
            handleMarkAsRead={handleMarkAsRead}
            handleAddToBookMark={handleAddToBookMark}
          />
        </div>
        <div className="lg:ml-2 mt-4 lg:mt-0 lg:w-1/3 flex-shrink-0">
          <Bookmark bookmarks={bookmarks} readingTime={readingTime} />
        </div>
      </div>
    </div>
  );
}

export default App;
