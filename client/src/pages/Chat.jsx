import { io } from "socket.io-client";
import ChatBubble from "../components/ChatBubble";
import ChatFooter from "../components/ChatFooter";
import ScrollToBottom from "react-scroll-to-bottom";
import useChat from "../hooks/useChat";
import useCheckAuth from "../hooks/useCheckAuth";

const socket = io("http://localhost:5000");

const Chat = () => {
  useCheckAuth();
  const { message, messages, sendMessage, setMessage } = useChat(socket);

  return (
    <div className="bg-[#0B141A]">
      <div className="flex flex-col h-screen bg-[#0B141A] text-gray-700 relative pt-2 px-2 max-w-5xl mx-auto">
        <ScrollToBottom className="h-[90%] section">
          <div className="flex flex-col">
            {messages.map((item, index) => {
              return (
                <ChatBubble
                  key={index}
                  isYou={socket.id === item.id}
                  message={item.message}
                  date={item.date}
                  name={item.name}
                  profilePic={item.profilePic}
                />
              );
            })}
          </div>
        </ScrollToBottom>
        <ChatFooter
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
    </div>
  );
};

export default Chat;
