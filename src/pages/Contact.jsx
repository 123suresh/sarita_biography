import React from "react";
import Footer from "../assets/Footer"; // Import Footer component

function Contact() {
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
        Contact
      </h1>
      <p style={{ fontSize: "20px", lineHeight: "1.8", marginTop: "20px" }}>
        For inquiries, collaborations, or messages, feel free to reach out to
        me through my social media platforms or email. I look forward to
        hearing from you!
      </p>

      {/* Footer */}
      <Footer /> {/* Footer component included here */}
    </div>
  );
}

export default Contact;