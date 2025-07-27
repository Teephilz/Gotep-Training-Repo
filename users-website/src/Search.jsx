import React from "react";
import searchSvg from "./assets/search.svg"


const Search = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full bg-white shadow-sm focus-within:ring-2 focus-within:ring-blue-500 transition w-full max-w-xl mx-auto">
      <img src={searchSvg} alt="Search" className="w-5 h-5" />
      <input
        type="text"
        placeholder="Search through thousands of movies"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full bg-transparent outline-none text-sm placeholder-gray-500"
      />
    </div>
  );
};

export default Search;

