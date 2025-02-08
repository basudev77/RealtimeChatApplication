import React from "react";
import ChatUser from "./ChatUser";
import Messages from "./Messages";
import SendMessage from "./SendMessage";

const MainChat = () => {
  return (
    <div className="w-full h-full bg-gray-900 flex flex-col">
      <ChatUser />
      <Messages />
      <SendMessage />
    </div>
  );
};

export default MainChat;
