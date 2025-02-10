import { useEffect, useState } from "react";
import axios from "axios";

const useGetAllUsers = () => {
  const [allUsers, setAllUsers] = useState([]); // Should remain an array
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getAllUsers = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/user/allusers",
          {
            withCredentials: true,
          }
        );

        setAllUsers(response.data.filteredUsers || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    getAllUsers();
  }, []);

  return [ allUsers, loading ];
};

export default useGetAllUsers;
