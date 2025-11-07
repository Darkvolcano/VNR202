import React, { useState, useRef, useEffect } from "react";

const vnFlag = "/assets/vn_flag.jpg";
const bgImage = "/assets/lotus.jpg";

const AIChat = () => {
  const [messages, setMessages] = useState([
    {
      type: "system",
      content:
        "Xin chào! Tôi là trợ lý AI chuyên về lịch sử Việt Nam. Hãy hỏi tôi bất cứ điều gì về cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh!",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatRef = useRef(null);

  const speakText = (text) => {
    if (!window.responsiveVoice) return;

    setTimeout(() => {
      window.responsiveVoice.cancel();
      window.responsiveVoice.speak(text, "Vietnamese", {
        rate: 1,
        pitch: 1,
        volume: 1,
      });
    }, 120);
  };

  const scrollToBottom = () => {
    if (chatRef.current) {
      setTimeout(() => {
        chatRef.current.scrollTo({
          top: chatRef.current.scrollHeight,
          behavior: "smooth",
        });
      }, 120);
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (input.trim() === "") return;

    const userMsg = { type: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const res = await fetch("http://47.128.217.142:8090/vnr/v2", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: input }),
      });

      const data = await res.json();
      const aiMsg = {
        type: "ai",
        content: data.message || "Xin lỗi, tôi không thể trả lời câu hỏi này.",
      };

      setMessages((prev) => [...prev, aiMsg]);
      speakText(aiMsg.content);
    } catch {
      const errMsg = {
        type: "error",
        content: "Lỗi kết nối đến dịch vụ AI. Vui lòng thử lại sau.",
      };
      setMessages((prev) => [...prev, errMsg]);
      speakText(errMsg.content);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading) handleSend();
    }
  };

  const clearChat = () => {
    setMessages([
      {
        type: "system",
        content:
          "Xin chào! Tôi là trợ lý AI chuyên về lịch sử Việt Nam. Hãy hỏi tôi bất cứ điều gì về cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh!",
      },
    ]);
  };

  const suggestedQuestions = [
    "Hồ Chí Minh ra đi tìm đường cứu nước khi nào?",
    "Những nước nào Bác Hồ đã từng đến?",
    "Bác Hồ đã thành lập những tổ chức nào?",
    "Tư tưởng của Bác Hồ được hình thành như thế nào?",
    "Vai trò của Bác Hồ trong cách mạng Việt Nam?",
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "130px 20px",
        maxWidth: "1000px",
        margin: "0 auto",
      }}
    >
      <div className="fade-in-section" style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-gold)",
            fontSize: "3.2em",
            fontWeight: "900",
            marginBottom: "10px",
          }}
        >
          Trò chuyện với AI
        </h1>
        <p style={{ color: "var(--color-text-muted)", fontSize: "1.2em" }}>
          Tìm hiểu lịch sử Việt Nam thông qua trí tuệ nhân tạo
        </p>
      </div>

      <div
        style={{
          backgroundColor: "var(--color-surface)",
          borderRadius: "12px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
          overflow: "hidden",
          border: "2px solid var(--color-primary-red)",
        }}
      >
        <div
          style={{
            background: "linear-gradient(135deg,#b71c1c,#c62828)",
            padding: "15px 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <img
              src={vnFlag}
              alt=""
              style={{
                width: "45px",
                height: "45px",
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid white",
              }}
            />
            <div>
              <h3 style={{ margin: 0, fontSize: "1.4em", fontWeight: "700" }}>AI Lịch Sử Việt Nam</h3>
              <small>Trợ lý ảo về Chủ tịch Hồ Chí Minh</small>
            </div>
          </div>

          <button
            onClick={clearChat}
            style={{
              background: "transparent",
              border: "2px solid white",
              color: "white",
              padding: "6px 12px",
              borderRadius: "6px",
              cursor: "pointer",
            }}
          >
            Làm mới
          </button>
        </div>

        <div
          style={{
            height: "500px",
            overflowY: "auto",
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "20px",
            backdropFilter: "blur(10px)",
          }}
          ref={chatRef}
        >
          {messages.map((msg, i) => (
            <div key={i} style={{ marginBottom: "18px" }}>
              {msg.type === "system" ? (
                <div
                  style={{
                    textAlign: "center",
                    padding: "10px",
                    background: "#1e88e5",
                    color: "white",
                    borderRadius: "8px",
                  }}
                >
                  {msg.content}
                </div>
              ) : msg.type === "user" ? (
                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      display: "inline-block",
                      background: "var(--color-primary-red)",
                      color: "white",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      maxWidth: "75%",
                      textAlign: "left",
                    }}
                  >
                    <strong>Bạn</strong>
                    <br />
                    {msg.content}
                  </div>
                </div>
              ) : msg.type === "ai" ? (
                <div style={{ textAlign: "left" }}>
                  <div
                    style={{
                      display: "inline-block",
                      background: "#fff",
                      color: "#000",
                      padding: "12px 16px",
                      borderRadius: "10px",
                      maxWidth: "75%",
                    }}
                  >
                    <strong style={{ color: "var(--color-primary-red)" }}>AI Assistant</strong>
                    <br />
                    {msg.content}
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    background: "#c62828",
                    color: "white",
                    padding: "10px",
                    borderRadius: "8px",
                  }}
                >
                  {msg.content}
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  background: "#fff",
                  padding: "12px 16px",
                  borderRadius: "10px",
                  display: "inline-block",
                }}
              >
                <strong style={{ color: "var(--color-primary-red)" }}>AI Assistant</strong>
                <br />
                <span className="spinner-grow spinner-grow-sm"></span> Đang suy nghĩ...
              </div>
            </div>
          )}
        </div>

        {messages.length === 1 && (
          <div style={{ padding: "20px", background: "#222", borderTop: "2px solid #333" }}>
            <small style={{ color: "var(--color-text-muted)" }}>Câu hỏi gợi ý:</small>
            <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap", gap: "10px" }}>
              {suggestedQuestions.map((q, idx) => (
                <span
                  key={idx}
                  onClick={() => setInput(q)}
                  style={{
                    padding: "8px 14px",
                    background: "#333",
                    border: "1px solid var(--color-primary-red)",
                    color: "var(--color-text)",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  {q}
                </span>
              ))}
            </div>
          </div>
        )}

        <div style={{ padding: "15px 20px", background: "#111", borderTop: "2px solid #333" }}>
          <textarea
            rows={1}
            value={input}
            placeholder="Hãy hỏi tôi về Chủ tịch Hồ Chí Minh..."
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKey}
            style={{
              width: "100%",
              resize: "none",
              padding: "12px",
              borderRadius: "8px",
              border: "2px solid var(--color-primary-red)",
              outline: "none",
              background: "#222",
              color: "white",
              fontSize: "1em",
              marginBottom: "10px",
            }}
          />
          <button
            onClick={handleSend}
            disabled={isLoading || input.trim() === ""}
            style={{
              width: "100%",
              padding: "12px",
              borderRadius: "8px",
              border: "none",
              background: "var(--color-primary-red)",
              color: "white",
              fontWeight: "700",
              cursor: "pointer",
              opacity: isLoading || input.trim() === "" ? 0.6 : 1,
            }}
          >
            Gửi
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIChat;
