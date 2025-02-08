import React from "react";

const ChatUser = () => {
  return (
    <div className="flex space-x-3 items-center justify-center bg-gray-800 hover:bg-slate-700 duration-300 cursor-pointer h-[10%]">
      <div className="avatar online">
        <div className="w-16 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div>
        <h1 className="font-semibold text-white">Basudev Das</h1>
        <span className="font-thin text-white">online</span>
      </div>
    </div>
  );
};

export default ChatUser;
