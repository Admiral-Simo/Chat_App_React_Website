import moment from "moment";
import React from "react";

const ChatBubble = ({ isYou, message, date, name, profilePic }) => {
  return (
    <div
      className={`${
        isYou ? "self-end" : "self-start"
      } text-[#DAE4E5] relative mb-6  flex mx-4`}
    >
      <img
        src={profilePic}
        alt="profile_picture"
        className={`absolute w-8 h-8 rounded-full -bottom-4 ${
          isYou ? "-right-4" : "-left-4}"
        }`}
      />
      <div
        className={`${
          isYou ? "self-end bg-[#005C4B]" : "self-start bg-[#202C33]"
        } text-[#DAE4E5] p-3 rounded-lg max-w-xs`}
      >
        <p className="text-white">{message}</p>
        <div className="flex justify-between space-x-3">
          <p className="text-xs text-gray-300">{moment(date).fromNow()}</p>
          <p className="text-xs text-gray-300">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default ChatBubble;
