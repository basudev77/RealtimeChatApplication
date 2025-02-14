import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center bg-slate-600" style={{ minHeight: "calc(90vh - 10vh)" }}>
      <div className="flex w-[60%] flex-col gap-4">
        <div className="skeleton h-20 w-full"></div>
        <div className="skeleton h-20 w-44"></div>
        <div className="skeleton h-20 w-full"></div>
        <div className="skeleton h-20 w-full"></div>
      </div>
    </div>
  );
};

export default Loading;
