import React, { useEffect, useRef } from "react";
import Message from "./Message";
import useGetMessage from "../../context/useGetMessage";
import Loading from "../../components/Loading";

const Messages = () => {
  const { loading, messages } = useGetMessage();
  const lastMsgRef = useRef(null); // create ref to scroll to the last message

  useEffect(() => {
    // Delay the scroll to allow the DOM to update
    if (lastMsgRef.current) {
      lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]); // Re-run this when messages change

  return (
    <div className="h-[80%] bg-gray-900 overflow-y-auto">
      {loading ? (
        <Loading />
      ) : (
        messages.length > 0 &&
        messages.map((message, index) => (
          <div 
            key={message._id} 
            ref={index === messages.length - 1 ? lastMsgRef : null} // Apply ref to the last message
          >
            <Message message={message} />
          </div>
        ))
      )}
      {!loading && messages.length === 0 && (
        <div className="flex justify-center items-center h-full">
          <p className="text-white">Say! Hi to start the conversation</p>
        </div>
      )}
    </div>
  );
};

export default Messages;
