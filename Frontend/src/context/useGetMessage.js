import { useEffect, useState } from "react";
import axios from "axios";
import useConversation from "../zustand/useConversation";

const useGetMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessage = async () => {
      if (!selectedConversation?._id) return;

      setLoading(true);
      try {
        const response = await axios.get(
          `/api/message/get/${selectedConversation._id}`,
          { withCredentials: true }
        );
        setMessages(response.data);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    getMessage();
  }, [selectedConversation, setMessages]);

  return { loading, messages };
};

export default useGetMessage;
