import React, { useState } from "react";
import "../App.css";

const NewsBar = ({ text }) => {
  const [copySuccess, setCopySuccess] = useState("");

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess("Podaj dalej!");
      setTimeout(() => setCopySuccess(""), 2000); // Reset the notification after 2 seconds
    } catch (err) {
      setCopySuccess("Coś poszło nie tak...");
    }
  };

  return (
    <div className="news-bar" onClick={copyToClipboard}>
      <div className="news-content">{text}</div>
      {copySuccess && <div className="copy-notification">{copySuccess}</div>}
    </div>
  );
};

export default NewsBar;
