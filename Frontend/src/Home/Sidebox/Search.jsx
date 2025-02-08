import React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="h-[10vh]">
      <div className="px-4 py-3">
        <form action="">
          <div className="flex items-center space-x-2">
            <label className="border border-gray-700 bg-slate-900 flex items-center gap-2 w-full sm:w-[90%] md:w-[80%] rounded-lg p-2">
              <input
                type="text"
                className="w-full outline-none bg-slate-900 text-white placeholder-gray-400 px-2"
                placeholder="Search"
              />
            </label>
            <button className="text-white hover:bg-gray-700 p-2 rounded-full transition">
              <FaSearch className="text-4xl" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
