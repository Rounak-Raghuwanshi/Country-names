import React from "react";

const Navbar = () => {
  return (
    <nav className="p-6 bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-800">
          Where in the World?
        </h1>
        <button
          className="focus:outline-none flex items-center text-gray-800 dark:text-white"
        >
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
