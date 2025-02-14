import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";
import { IoMenu } from "react-icons/io5";

const Chatuser = () => {
  const { selectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "online" : "offline";
  };

  return (
    <div className="relative flex items-center h-[10vh] justify-center gap-4 bg-slate-800 duration-300 rounded-md">
      <label
        htmlFor="my-drawer-2"
        className="btn btn-ghost drawer-button lg:hidden absolute left-4 "
      >
        <IoMenu className="text-white text-4xl" />
      </label>
      <div className="flex space-x-3 items-center justify-center">
        <div
          className={`avatar z-0 ${getOnlineUsersStatus(
            selectedConversation._id
          )}`}
        >
          <div className="w-14 rounded-full">
            <img src="https://tse1.mm.bing.net/th?id=OIP.11DqAwY1SQbjr6PEVpTEHwHaHa&pid=Api&P=0&h=180" />
          </div>
        </div>
        <div>
          <h1 className="text-xl">{selectedConversation.fullname}</h1>
          <span className="text-sm">
            {getOnlineUsersStatus(selectedConversation._id)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Chatuser;
