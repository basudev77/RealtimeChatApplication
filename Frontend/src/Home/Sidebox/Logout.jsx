import React, { useState } from "react";
import { BiLogOutCircle } from "react-icons/bi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthProvider"; // Import useAuth

const Logout = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth(); // Get setAuthUser function

  const handleLogout = async () => {
    if (loading) return; // Prevent multiple clicks
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:3000/user/logout", {}, { withCredentials: true });

      localStorage.removeItem("userDetails");

      setAuthUser(null); // Update auth state to null

      alert(res.data?.message || "Logged out successfully!");

      // Navigate to login after a short delay
      navigate("/login");
    } catch (error) {
      console.error("Error logging out:", error);
      alert("Logout failed! Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-[10vh] flex items-center px-4 gap-2">
      <div>
        <BiLogOutCircle
          className={`text-5xl text-white hover:bg-slate-700 duration-300 cursor-pointer rounded-full p-2 ${
            loading ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleLogout}
          disabled={loading}
        />
      </div>
      <span className="text-white text-lg font-normal">
        {loading ? "Logging out..." : "Logout"}
      </span>
    </div>
  );
};

export default Logout;
