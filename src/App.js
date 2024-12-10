import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const MarkdownEditor = () => {
  const [markdown, setMarkdown] = useState("");

  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {/* Markdown 입력창 */}
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        style={{
          width: "50%",
          height: "400px",
        }}
        placeholder="Enter your Markdown here..."
      />

      {/* Markdown 렌더링 */}
      <div
        style={{
          width: "50%",
          height: "400px",
          background: "#f9f9f9",
        }}
      >
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};

export default MarkdownEditor;
