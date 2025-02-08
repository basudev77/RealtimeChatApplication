import React from "react";
import { IoSend } from "react-icons/io5";

const SendMessage = () => {
  return (
    <div className="flex h-[10%] w-full items-center space-x-4 p-4 bg-gray-800">
      <input
        type="text"
        placeholder="Type here"
        className="input input-bordered w-[80%] bg-slate-900 caret-white text-white px-4 py-2 rounded-md"
      />
      <button className="p-3 rounded-full hover:bg-slate-700">
        <IoSend className="text-4xl text-slate-400" />
      </button>
    </div>
  );
};

export default SendMessage;
