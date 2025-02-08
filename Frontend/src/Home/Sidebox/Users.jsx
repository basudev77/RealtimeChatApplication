import React from "react";
import User from "./User";

const Users = () => {
  return (
    <div className="h-[80vh] flex flex-col">
      <h1 className="px-8 py-2 text-white text-center font-semibold bg-slate-800 rounded-md">
        Messages
      </h1>
      <div className="overflow-y-auto">
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
        <User />
      </div>
    </div>
  );
};

export default Users;
