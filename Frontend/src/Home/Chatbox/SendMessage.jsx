import React, { useState } from "react";
import { IoSend } from "react-icons/io5";
import useSendMessage from "../../context/useSendMessage.js";

const SendMessage = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = useSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await sendMessages(message);
    setMessage("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex space-x-1 h-[10vh] items-center bg-gray-800">
        <div className=" w-[70%] mx-4">
          <input
            type="text"
            placeholder="Type here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-700 rounded-xl outline-none mt-1 px-4 py-3 w-full"
          />
        </div>
        <button className="w-[15%] h-[70%] hover:bg-gray-700 bg-gray-600 rounded-xl flex items-center justify-center">
          <IoSend className="text-3xl" />
        </button>
      </div>
    </form>
  );
};

export default SendMessage;
