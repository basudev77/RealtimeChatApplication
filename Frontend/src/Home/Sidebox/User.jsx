import React from "react";

const User = ({user}) => {
  return (
    <div className="flex items-center space-x-4 px-6 py-3 hover:bg-slate-700 duration-300 cursor-pointer">
      <div className="avatar online">
        <div className="w-12 rounded-full">
          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <div className="flex flex-col text-white">
        <h1 className="font-semibold">{user.fullname}</h1>
        <span className="font-thin">{user.email}</span>
      </div>
    </div>
  );
};

export default User;
