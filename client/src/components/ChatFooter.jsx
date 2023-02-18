import React from "react";

const ChatFooter = ({message, setMessage, sendMessage}) => {
  return (
    <form onSubmit={sendMessage} className="flex flex-row space-x-3 items-center absolute bottom-2 left-2 right-2">
      <input
        className="py-2 focus:outline-none bg-[#2A3942] placeholder-[#8696A0] text-[#D1D7DB] px-5 rounded-lg w-52 flex-1"
        type="text"
        placeholder="Type a message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        className="py-2 px-5 bg-purple-300 focus:outline-none text-purple-700 transition duration-300 hover:text-purple-300 font-semibold hover:bg-purple-700 capitalize rounded-lg"
      >
        send
      </button>
    </form>
  );
};

export default ChatFooter;
