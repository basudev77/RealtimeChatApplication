import React from "react";
import Sidebar from "./Home/Sidebox/Sidebar";
import MainChat from "./Home/Chatbox/MainChat";

const App = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <MainChat />
    </div>
  );
};

export default App;
