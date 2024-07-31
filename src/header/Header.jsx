import React from "react";
import profile from "../assets/pro2.jpg"; // Ensure the file name is correct

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 mx-6">
      <h1 className="text-3xl text-blue-800 font-bold">Knowledge Cafe</h1>
      <img
        src={profile}
        alt="Profile"
        className="w-12 h-12 rounded-full float-right"
      />
    </header>
  );
};

export default Header;
