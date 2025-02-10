import React from "react";

const Message = ({ message }) => {
  const authUser = JSON.parse(localStorage.getItem("userDetails"));
  const itsMe = message.senderId === authUser.user._id;

  const chatName = itsMe ? "chat-end" : "chat-start";
  const chatColor = itsMe ? "chat-bubble-primary" : "chat-bubble-info";
  return (
    <div>
      <div className="p-4">
        <div className={`chat ${chatName}`}>
          <div className={`chat-bubble ${chatColor}`}>{message.message}</div>
        </div>
      </div>
    </div>
  );
};

export default Message;
