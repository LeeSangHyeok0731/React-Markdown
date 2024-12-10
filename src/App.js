import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        style={{
          width: "50%",
          height: "400px",
          padding: "10px",
          fontSize: "16px",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
        placeholder="마크다운으로 작성해 주세요"
      />

      <div
        style={{
          width: "50%",
          height: "400px",
          overflow: "auto",
          padding: "10px",
          border: "1px solid #ddd",
          borderRadius: "4px",
          background: "#f9f9f9",
        }}
      >
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
