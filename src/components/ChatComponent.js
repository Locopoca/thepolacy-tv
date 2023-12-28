import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';
import './ChatComponentPixel.css'; // Ensure you have the CSS file

const socket = io('https://aqueous-thicket-89746-c9d5812a2447.herokuapp.com'); // Adjust as per your server setup

const ChatComponent = ({ userAccount }) => {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState([]);
  const messagesEndRef = useRef(null);

  // Function to format user identity
  const formatUserIdentity = (account) => {
    return account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : '';
  };

  // Scroll to the bottom of the chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    socket.on('chat message', (msg) => {
      setChat(prevChat => [...prevChat, msg]);
    });

    return () => {
      socket.off('chat message');
    };
  }, []);

  useEffect(scrollToBottom, [chat]);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey && message.trim()) {
      e.preventDefault(); // Prevents adding a new line
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (message) {
      socket.emit('chat message', message, userAccount);
      setMessage('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-messages">
        {chat.map((msg, index) => (
          <div key={index} className="chat-message">
            <div className="message-info">
              <span className="message-user">{formatUserIdentity(msg.userId)}</span>
              <span className="message-time">{new Date(msg.timestamp).toLocaleTimeString()}</span>
            </div>
            <span className="message-text">{msg.text}</span>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <textarea 
        className="chat-input"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyPress={handleKeyPress}
        maxLength={1000}
        placeholder="Napisz wiadomość..."
        rows={3}
      />
    </div>
  );
};

export default ChatComponent;
