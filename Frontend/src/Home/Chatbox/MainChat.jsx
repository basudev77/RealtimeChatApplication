import React, { useEffect } from "react";
import Chatuser from "./Chatuser";
import Messages from "./Messages";
import SendMessage from "./SendMessage";
import useConversation from "../../zustand/useConversation.js";
import { useAuth } from "../../context/AuthProvider.jsx";
import { IoMenu } from "react-icons/io5";

const MainChat = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="w-full bg-slate-900 text-gray-300">
      <div>
        {!selectedConversation ? (
          <NoChatSelected />
        ) : (
          <>
            <Chatuser />
            <div
              className="overflow-y-auto"
              style={{ maxHeight: "calc(90vh - 10vh)" }}
            >
              <Messages />
            </div>
            <SendMessage />
          </>
        )}
      </div>
    </div>
  );
};

export default MainChat;

const NoChatSelected = () => {
  const [authUser] = useAuth();
  return (
    <>
      <div className="relatives">
        <label
          htmlFor="my-drawer-2"
          className="btn btn-ghost drawer-button lg:hidden absolute left-5 top-5 bg-slate-700"
        >
          <IoMenu className="text-white text-4xl" />
        </label>
        <div className="flex h-screen items-center justify-center">
          <h1 className="text-center">
            Welcome{" "}
            <span className="font-semibold text-xl">
              {authUser.user.fullname}
            </span>
            <br />
            No chat selected, please start conversation by selecting anyone to
            chat
          </h1>
        </div>
      </div>
    </>
  );
};
