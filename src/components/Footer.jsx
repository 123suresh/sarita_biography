import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#262528",
        color: "#aaa",
        textAlign: "center",
        padding: "10px 0",
        // marginTop: "8px",
      }}
    >
      <Typography variant="body2">
        © 2025 Sarita Lamichhane | All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;