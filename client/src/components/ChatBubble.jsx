import React from "react";

const ChatBubble = ({ isYou, message }) => {
  return (
    <div
      className={`${
        isYou ? "self-end bg-[#005C4B]" : "self-start bg-[#202C33]"
      } text-[#DAE4E5] p-3 mb-3 rounded-lg max-w-xs`}
    >
      <p className="text-white">{message}</p>
    </div>
  );
};

export default ChatBubble;
