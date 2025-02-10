import React from "react";
import Sidebar from "./Home/Sidebox/Sidebar";
import MainChat from "./Home/Chatbox/MainChat";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
import Loading from "./components/Loading";

const App = () => {
  const [authUser, setAuthUser] = useAuth();
  return (
    <Routes>
      <Route
        path="/"
        element={
          authUser ? (
            <div className="flex h-screen">
              <Sidebar />
              <MainChat />
            </div>
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/login"
        element={authUser ? <Navigate to="/" /> : <Login />}
      />
      <Route
        path="/signup"
        element={authUser ? <Navigate to="/" /> : <Signup />}
      />
      <Route path="*" element={<Loading/>} />
    </Routes>
  );
};

export default App;
