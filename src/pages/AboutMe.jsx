import React from "react";

function AboutMe() {
  return (
    <div
      style={{
        background: "linear-gradient(to bottom right, #f8f4fc, #e8e4f8)",
        minHeight: "100vh",
        padding: "40px",
        fontFamily: "'Poppins', sans-serif",
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "48px", color: "#6b46c1", textAlign: "center" }}>
        About Me
      </h1>
      <p style={{ fontSize: "20px", lineHeight: "1.8", marginTop: "20px" }}>
        I am Sarita Lamichhane, an actress, artist, and media personality. With
        over 20 years of experience in the entertainment industry, I have
        passionately dedicated my career to storytelling through acting,
        directing, and producing. Here, you can learn more about my journey,
        accomplishments, and ongoing projects.
      </p>
    </div>
  );
}

export default AboutMe;