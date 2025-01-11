import React from "react";
import { Box, Typography, Collapse } from "@mui/material";

const MovieFrame = ({ image, title, description, isOpen, onClick }) => {
  return (
    <Box
      onClick={onClick}
      sx={{
        cursor: "pointer",
        width: "70%",
        textAlign: "center",
        margin: "auto",
        position: "relative",
      }}
    >
      {/* Movie Poster */}
      <Box
        sx={{
          position: "relative",
          paddingTop: "150%", // Aspect ratio for movie poster
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
          "&:hover": {
            transform: "scale(1.04)",
            transition: "transform 0.4s ease",
          },
        }}
      >
        {/* Title Overlay */}
        <Box
          sx={{
            position: "absolute",
            bottom: "0",
            width: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            padding: "8px 0",
            borderBottomLeftRadius: "8px",
            borderBottomRightRadius: "8px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              color: "#fff",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>

      {/* Description (Toggles on Click) */}
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <Box
          sx={{
            marginTop: "15px",
            padding: "10px",
            backgroundColor: "#333",
            color: "#ddd",
            borderRadius: "8px",
            textAlign: "justify",
            fontSize: "18px",
          }}
        >
          <Typography variant="body1">{description}</Typography>
        </Box>
      </Collapse>
    </Box>
  );
};

export default MovieFrame;
