import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage";

const SendMessage = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim() === "") return;
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex h-full w-full items-center space-x-4 p-4 bg-gray-800">
        <input
          type="text"
          placeholder="Type here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="input input-bordered w-[80%] bg-slate-900 caret-white text-white px-4 py-2 rounded-md"
        />
        <button className="p-3 rounded-full hover:bg-slate-700">
          <IoSend className="text-4xl text-slate-400" />
        </button>
      </div>
    </form>
  );
};

export default SendMessage;
