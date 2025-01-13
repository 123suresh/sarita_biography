import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

const awards = Array.from({ length: 9 }, (_, index) => ({
  title: `Award Title ${index + 1}`,
  description: `This is a description for Award ${index + 1}. It highlights the significance of the achievement and honors the recipient's exceptional contributions.`,
  image: "/images/Award/award-1.jpeg",
}));

const honors = Array.from({ length: 9 }, (_, index) => ({
  title: `Honor Title ${index + 1}`,
  description: `This is a description for Honor ${index + 1}. It showcases the recognition received for remarkable efforts in the respective field.`,
  image: index % 2 === 0 ? "/images/Honor/honor-1.jpg" : "/images/Honor/honor-2.jpg",
}));

const AwardPage = () => {
  const [activeSection, setActiveSection] = useState("Awards");
  const [currentImageList, setCurrentImageList] = useState(awards);
  const [isSlideshowOpen, setIsSlideshowOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle switching sections
  const handleToggleSection = (section) => {
    setActiveSection(section);
    setCurrentImageList(section === "Awards" ? awards : honors);
    setIsSlideshowOpen(false); // Close slideshow if open
  };

  // Handle opening the slideshow
  const openSlideshow = (index) => {
    setCurrentImageIndex(index);
    setIsSlideshowOpen(true);
  };

  // Handle closing the slideshow
  const closeSlideshow = () => {
    setIsSlideshowOpen(false);
  };

  // Handle slideshow navigation
  const handleSlideshowNavigation = (direction) => {
    if (direction === "left") {
      setCurrentImageIndex((prev) =>
        prev === 0 ? currentImageList.length - 1 : prev - 1
      );
    } else if (direction === "right") {
      setCurrentImageIndex((prev) =>
        prev === currentImageList.length - 1 ? 0 : prev + 1
      );
    }
  };

  return (
    <Box
      sx={{
        padding: "100px 10%",
        backgroundColor: "#262528",
        color: "#fff",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: "center", marginBottom: "30px" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#CDBFA7" }}>
          HONORS & AWARDS
        </Typography>
      </Box>

      {/* Toggle Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <Button
          onClick={() => handleToggleSection("Awards")}
          sx={{
            backgroundColor: activeSection === "Awards" ? "#A04455 " : "#444",
            color: "#fff",
            "&:hover": {
              backgroundColor: activeSection === "Awards" ? "#A04455" : "#555",
            },
            padding: "10px 20px",
            fontWeight: "bold",
          }}
        >
          Awards
        </Button>
        <Button
          onClick={() => handleToggleSection("Honors")}
          sx={{
            backgroundColor: activeSection === "Honors" ? "#A04455" : "#444",
            color: "#fff",
            "&:hover": {
              backgroundColor: activeSection === "Honors" ? "#A04455" : "#555",
            },
            padding: "10px 20px",
            fontWeight: "bold",
          }}
        >
          Honors
        </Button>
      </Box>

      {/* Grid Section */}
      <Grid container spacing={4}>
        {currentImageList.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              position: "relative",
              cursor: "pointer",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.4)",
              },
            }}
            onClick={() => openSlideshow(index)}
          >
            <Box
              sx={{
                borderRadius: "10px",
                overflow: "hidden",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                }}
              />
            </Box>
            <Box
              sx={{
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#ccc",
                }}
              >
                {item.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Slideshow Popup */}
      {isSlideshowOpen && (
        <div
          style={{
            position: "fixed",
            top: 30,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={closeSlideshow} // Close on background click
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent closing when clicking the button
              closeSlideshow();
            }}
            style={{
              position: "absolute",
              top: "30px",
              right: "20px",
              background: "none",
              color: "#fff",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            ✖
          </button>

          {/* Image */}
          <img
            src={currentImageList[currentImageIndex].image}
            alt="Slideshow"
            style={{
              maxWidth: "80%",
              maxHeight: "80%",
              objectFit: "contain",
              borderRadius: "10px",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent background click closing
          />

          {/* Left Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent background click closing
              handleSlideshowNavigation("left");
            }}
            style={{
              position: "absolute",
              left: "20px",
              background: "none",
              color: "#fff",
              border: "none",
              fontSize: "36px",
              cursor: "pointer",
            }}
          >
            ◀
          </button>

          {/* Right Arrow */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent background click closing
              handleSlideshowNavigation("right");
            }}
            style={{
              position: "absolute",
              right: "20px",
              background: "none",
              color: "#fff",
              border: "none",
              fontSize: "36px",
              cursor: "pointer",
            }}
          >
            ▶
          </button>
        </div>
      )}
    </Box>
  );
};

export default AwardPage;