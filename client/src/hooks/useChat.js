import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCredentials } from "../redux/features/authSlice";

const useChat = (socket) => {
  const { name, profilePic } = useSelector(selectCredentials);

  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // linked to submit button
  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      let tempObj = {
        profilePic,
        name,
        message,
        id: socket.id,
      };
      socket.emit("send_message", tempObj);

      setMessages((prev) => [...prev, tempObj]);
    }

    setMessage("");
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => [...prev, data]);
    });
  }, [socket]);

  return { message, messages, sendMessage, setMessage };
};

export default useChat;
