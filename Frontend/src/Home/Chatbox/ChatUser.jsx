import React from "react";
import userConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext";

const ChatUser = () => {
  const { selectedConversation } = userConversation();
  const { onlineUsers } = useSocketContext();
  const getOnlineUsersStatus = (userId) => {
    return onlineUsers.includes(userId) ? "online" : "offline";
  };

  const isOnline = onlineUsers.includes(selectedConversation._id);

  return (
    <div className="flex space-x-3 items-center justify-center bg-gray-800 hover:bg-slate-700 duration-300 cursor-pointer h-[10%]">
      <div className={`avatar ${isOnline ? "online" : ""}`}>
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-white">
          {selectedConversation?.fullname}
        </h1>
        <span className="font-thin text-white">
          {getOnlineUsersStatus(selectedConversation._id)}
        </span>
      </div>
    </div>
  );
};

export default ChatUser;
