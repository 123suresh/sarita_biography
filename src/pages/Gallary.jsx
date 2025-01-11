import React from "react";

function Gallary() {
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
        Gallery
      </h1>
      <p style={{ fontSize: "20px", lineHeight: "1.8", marginTop: "20px" }}>
        Explore my gallery to see moments from my career, events, and personal
        life. Stay inspired by the stories behind these images!
      </p>
    </div>
  );
}

export default Gallary;