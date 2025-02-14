import React from "react";
import Search from "./Search";
import Users from "./Users";
import Logout from "./Logout";

const Sidebar = () => {
  return (
    <div className="w-full bg-black text-gray-300">
      <Search />
      <div
        className="overflow-y-auto"
        style={{ minHeight: "calc(80vh - 8vh)" }}
      >
        <Users />
      </div>
      <Logout />
    </div>
  );
};

export default Sidebar;
