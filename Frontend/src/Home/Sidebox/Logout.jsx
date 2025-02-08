import React from "react";
import { BiLogOutCircle } from "react-icons/bi";

const Logout = () => {
  return (
    <div className="h-[10vh] flex items-center px-4 gap-2">
      <div>
        <BiLogOutCircle className="text-5xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full p-2" />
      </div>
      <span className="text-white text-lg font-normal">Logout</span>
    </div>
  );
};

export default Logout;
