import React, { useState } from "react";
import axios from "axios";

const Chatbot = () => {
  const [showChat, setShowChat] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi! Ask me anything about Roopendra." },
  ]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const updatedMessages = [
      ...messages,
      { role: "user", content: userInput.trim() },
    ];

    setMessages(updatedMessages);
    setUserInput("");
    setLoading(true);

    try {
      const res = await axios.post("/api/chat", {
        messages: updatedMessages,
      });

      setMessages([
        ...updatedMessages,
        { role: "assistant", content: res.data.reply },
      ]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: "Sorry, I couldn't connect to OpenAI." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Button */}
      {!showChat && (
        <button
          onClick={() => setShowChat(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-md"
        >
          🤖 Chat
        </button>
      )}

      {/* Chat Window */}
      {showChat && (
        <div className="w-80 h-96 bg-white border border-gray-300 rounded-lg shadow-xl flex flex-col">
          <div className="bg-blue-600 text-white px-4 py-2 flex justify-between items-center">
            <span>Chatbot</span>
            <button onClick={() => setShowChat(false)}>✖</button>
          </div>

          <div className="flex-1 p-3 overflow-y-auto space-y-2 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded ${
                  msg.role === "user"
                    ? "bg-blue-100 text-right"
                    : "bg-gray-100 text-left"
                }`}
              >
                {msg.content}
              </div>
            ))}
            {loading && <div className="text-gray-400">Typing...</div>}
          </div>

          <div className="p-2 border-t border-gray-300">
            <input
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="w-full p-2 border rounded text-sm"
              placeholder="Ask something..."
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
