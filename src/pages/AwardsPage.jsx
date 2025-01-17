import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

const awards = [
  {
    title: "Excellence in Arts Award",
    description: "Recognized for outstanding contributions to the performing arts and dedication to cultural enrichment.",
    image: "/images/Award/award-1.jpeg",
  },
  {
    title: "Lifetime Achievement Award",
    description: "Honored for a remarkable career filled with impactful achievements and lasting legacy in the entertainment industry.",
    image: "/images/Award/award-2.jpg",
  },
  {
    title: "Rising Star of the Year",
    description: "Celebrating emerging talent and exceptional promise in the world of cinema and theater.",
    image: "/images/Award/award-3.jpg",
  },
];

const honors = [
  {
    title: "NEFTA",
    description: "Recognized for outstanding contributions to the performing arts and dedication to cultural enrichment.",
    image: "/images/Honor/nefta.jpg",
  },
  {
    title: "NEPAL ARMY I",
    description: "Recognized for outstanding contributions to the performing arts and dedication to cultural enrichment.",
    image: "/images/Honor/nepal-army1.jpg",
  },
  {
    title: "NEPAL ARMY II",
    description: "Recognized for outstanding contributions to the performing arts and dedication to cultural enrichment.",
    image: "/images/Honor/nepal-army2.jpg",
  },
  {
    title: "NEPAL ARMY III",
    description: "Recognized for outstanding contributions to the performing arts and dedication to cultural enrichment.",
    image: "/images/Honor/nepal-army3.jpg",
  },
  {
    title: "GLOBAL NEPAL",
    description: "Recognized for outstanding contributions to the performing arts and dedication to cultural enrichment.",
    image: "/images/Honor/global-nepal.jpg",
  },
  {
    title: "PARIWARTAN",
    description: "Recognized for outstanding contributions to the performing arts and dedication to cultural enrichment.",
    image: "/images/Honor/pariwartan-nepal.jpg",
  },
  {
    title: "FILM DEVELOPMENT BOARD",
    description: "Recognized for outstanding contributions to the performing arts and dedication to cultural enrichment.",
    image: "/images/Honor/fdb.jpg",
  },
  {
    title: "FILM FESTIVAL",
    description: "Recognized for outstanding contributions to the performing arts and dedication to cultural enrichment.",
    image: "/images/Honor/filmfest.jpg",
  },
  {
    title: "INAS",
    description: "Recognized for outstanding contributions to the performing arts and dedication to cultural enrichment.",
    image: "/images/Honor/inas.jpg",
  },
  {
    title: "ARMY",
    description: "Recognized for outstanding contributions to the performing arts and dedication to cultural enrichment.",
    image: "/images/Honor/army.jpeg",
  },
  {
    title: "ACTRESS HONOR",
    description: "Recognized for outstanding contributions to the performing arts and dedication to cultural enrichment.",
    image: "/images/Honor/actresshonor.JPG",
  },
  {
    title: "ACTRESS HONOR II",
    description: "Recognized for outstanding contributions to the performing arts and dedication to cultural enrichment.",
    image: "/images/Honor/actresshonor2.JPG",
  },
  {
    title: "EVEREST",
    description: "Recognized for outstanding contributions to the performing arts and dedication to cultural enrichment.",
    image: "/images/Honor/everest-1.jpg",
  },
  {
    title: "WOMENS DAY",
    description: "Recognized for outstanding contributions to the performing arts and dedication to cultural enrichment.",
    image: "/images/Honor/womensday.jpeg",
  },
];

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
        color: "#FBFBF3",
        backgroundColor: "#262528",
        minHeight: "100vh",
        fontFamily: "'Poppins', sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Header */}
      <Box sx={{ textAlign: "center", marginBottom: "30px" }}>
        <Typography variant="h3" sx={{ fontWeight: "bold", fontSize: "50px", color: "#CDBFA7" }}>
          HONORS & AWARDS
        </Typography>
      </Box>

      {/* Toggle Buttons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "40px",
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
                width: "100%",
                height: "550px",
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  objectFit: "cover",
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
            top: 40,
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