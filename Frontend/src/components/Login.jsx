import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [authUser, setAuthUser] = useAuth();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/user/login",
        formData,
        { withCredentials: true }
      );

      if (response.data) {
        toast.success(response.data.message || "Login successful!");
        localStorage.setItem("userDetails", JSON.stringify(response.data));
        setAuthUser(response.data);
        navigate("/");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Something went wrong!";
      toast.error(errorMessage); // Swapped toast with alert
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-indigo-700 p-6">
      <form
        onSubmit={handleSubmit}
        className="border border-gray-200 shadow-xl p-8 rounded-lg bg-white flex flex-col gap-4 w-full max-w-sm"
      >
        <h1 className="text-3xl text-center font-bold text-gray-800">Login</h1>

        {/* Email */}
        <label className="input input-bordered flex items-center gap-2 px-4 py-2 rounded-lg border-gray-300 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="grow bg-transparent focus:outline-none"
            placeholder="Email"
            required
          />
        </label>

        {/* Password */}
        <label className="input input-bordered flex items-center gap-2 px-4 py-2 rounded-lg border-gray-300 shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="grow bg-transparent focus:outline-none"
            placeholder="Password"
            required
          />
        </label>

        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline">
              Signup
            </Link>
          </p>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg transition duration-300 shadow-md"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
