import React, { useState } from "react";
import useConversation from "../zustand/useConversation.js";
import axios from "axios";

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  const sendMessages = async (message) => {
    setLoading(true);
    if (!selectedConversation?._id) return;
    try {
      const response = await axios.post(
        `http://localhost:3000/message/send/${selectedConversation._id}`,
        { message },
        { withCredentials: true }
      );
      setMessages([...messages, response.data.newMessage]);
    } catch (error) {
      console.error("Error sending messages:", error);
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMessages };
};

export default useSendMessage;
