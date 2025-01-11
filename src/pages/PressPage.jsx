import React from "react";
import { Typography } from "@mui/material";
import PressImg from "../components/PressImg";

function PressPage() {
  return (
    <div
      style={{
        padding: "30px 80px",
        color: "white",
        backgroundColor: "#212431",
        minHeight: "100vh", // Ensure the page stretches to the full height of the screen
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Press Images Section */}
      <div style={{ flex: 1 }}>
        <PressImg style={{ aspectRatio: "2/3", objectFit: "cover" }} /> {/* Maintaining the 2:3 aspect ratio */}
      </div>

      {/* Footer Section */}
      <div
        style={{
          marginTop: "auto", // Push the footer to the bottom
          textAlign: "center",
          padding: "20px 0",
          backgroundColor: "#212431",
          borderTop: "1px solid #444",
        }}
      >
        <Typography variant="body2" style={{ color: "#aaa", fontSize: "1rem" }}>
          © 2025 Sarita Lamichhane | All Rights Reserved.
        </Typography>
      </div>
    </div>
  );
}

export default PressPage;
