import React from "react";
import User from "./User";
import useGetAllUsers from "../../context/useGetAllUsers";

const Users = () => {
  const [allUsers, loading]= useGetAllUsers();
  return (
    <div className="h-[80vh] flex flex-col">
      <h1 className="px-8 py-2 text-white text-center font-semibold bg-slate-800 rounded-md">
        Messages
      </h1>
      <div className="overflow-y-auto">
        {loading ? (
          <div className="flex justify-center items-center h-[50vh]">
            <p className="text-white">Loading...</p>
          </div>
        ) : (
          allUsers.map((user, index) => <User key={index} user={user} />)
        )}
      </div>
    </div>
  );
};

export default Users;
