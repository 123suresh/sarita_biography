import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#212431",
        color: "#aaa",
        textAlign: "center",
        padding: "15px 0",
        marginTop: "30px",
      }}
    >
      <Typography variant="body2">
        © 2025 Sarita Lamichhane | All Rights Reserved
      </Typography>
    </Box>
  );
};

export default Footer;
