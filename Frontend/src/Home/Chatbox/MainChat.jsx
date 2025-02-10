import React from "react";
import ChatUser from "./ChatUser";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import { useAuth } from "../../context/AuthProvider";
import useConversation from "../../zustand/useConversation";

const MainChat = () => {
  const [authUser] = useAuth();
  const { selectedConversation } = useConversation();

  return (
    <div className="w-full h-full bg-gray-900 flex flex-col">
      {selectedConversation ? (
        <>
          <ChatUser />
          <Messages />
          <SendMessage />
        </>
      ) : (
        <div className="text-white h-screen flex flex-col items-center justify-center text-center px-4">
          <p>Welcome {authUser.user.fullname}</p>
          <p>Select a conversation to start chatting</p>
        </div>
      )}
    </div>
  );
};

export default MainChat;
