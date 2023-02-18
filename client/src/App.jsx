import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import ChatBubble from "./components/ChatBubble";
import ChatFooter from "./components/ChatFooter";
import ScrollToBottom from "react-scroll-to-bottom";

const socket = io("http://localhost:5000");

// TODO style scrollbar + authentication + avatar + time + author

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // linked to submit button
  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      let tempObj = {
        message,
        id: socket.id,
        date: new Date(Date.now()),
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

  return (
    <div className="bg-[#0B141A]">
      <div className="flex flex-col h-screen bg-[#0B141A] text-gray-700 relative pt-2 px-2 max-w-5xl mx-auto">
        <ScrollToBottom className="h-[90%]" >
          <view className="flex flex-col h-[90%]">
            {messages.map((item, index) => {
              return (
                <ChatBubble
                  key={index}
                  isYou={socket.id === item.id}
                  message={item.message}
                />
              );
            })}
          </view>
        </ScrollToBottom>
        <ChatFooter
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
}

export default App;
