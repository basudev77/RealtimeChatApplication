import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import useGetAllUsers from "../../context/useGetAllUsers";
import toast from "react-hot-toast";

const Search = () => {
  const [search, setSearch] = useState("");
  const [allUsers] = useGetAllUsers();
  const { setSelectedConversation } = useConversation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search.trim()) return;
    const conversation = allUsers.find((user) =>
      user.fullname?.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("User not found");
    }
  };

  return (
    <div className="h-[10vh]">
      <div className="px-4 py-3">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center space-x-2">
            <label className="border border-gray-700 bg-slate-900 flex items-center gap-2 w-full sm:w-[90%] md:w-[80%] rounded-lg p-2">
              <input
                type="text"
                className="w-full outline-none bg-slate-900 text-white placeholder-gray-400 px-2"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
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
