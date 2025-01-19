import React, { useState } from "react";
import { Box, Typography, Button, Grid } from "@mui/material";

const awards = [
  {
    title: "12th Nepal Africa Film Festival (NAFF) 2024",
    description: "Best Actress Award for Movie Sorry Mom",
    image: "/images/Award/award-1.jpeg",
  },
  {
    title: "Nepal Short Film Award 2023",
    description: "Best Actress Award for Short Movie Prabasi Jiwan",
    image: "/images/Award/award-3.jpg",
  },
  {
    title: "National Box Office Tele Film Award 2020",
    description: "Best Actress Award for Tele Serial Dristi",
    image: "/images/Award/award-2.jpg",
  },
];

const honors = [
  {
    title: "9th NEFTA Film Award 2016",
    description: "Nepal Film Technician Association (NEFTA) Certification of Appreciation as Jury Member",
    image: "/images/Honor/nefta.jpg",
  },
  {
    title: "Short Film Competition-2076 (2020)",
    description: "Token of Appreciation from Nepal Army",
    image: "/images/Honor/nepal-army1.jpg",
  },
  {
    title: "Laghu Film Competition-2078 (2021)",
    description: "Token of Appreciation from Nepal Army",
    image: "/images/Honor/nepal-army2.jpg",
  },
  {
    title: "Laghu Film Competition-2079 (2022)",
    description: "Token of Appreciation from Nepal Army",
    image: "/images/Honor/nepal-army3.jpg",
  },
  {
    title: "5th ATA Everest Global Nepali Film Award-2022",
    description: "Certification of Appreciation for 5th ATA Everest Global Nepali Film Award 2022 Held in Denver Co. USA",
    image: "/images/Honor/global-nepal.jpg",
  },
  {
    title: "Pariwartan Nepal",
    description: "Certificate of Appreciation from Pariwartan Nepal",
    image: "/images/Honor/pariwartan-nepal.jpg",
  },
  {
    title: "Film Development Board Nepal",
    description: "Certificate of Appreciation from Film Development Board Nepal",
    image: "/images/Honor/fdb.jpg",
  },
  {
    title: "12th Nepal Africa Film Festival (NAFF) 2024",
    description: "Moment Captured in 12th Nepal Africa Film Festival as Best Actress for Movie Sorry Mom",
    image: "/images/Honor/filmfest.jpg",
  },
  {
    title: "3rd INAS Nepali Film Award 2014",
    description: "Certificate of Appriciation from INAS for Jury",
    image: "/images/Honor/inas.jpg",
  },
  {
    title: "Laghu Film Competition-2079 (2022)",
    description: "Moment Captured while receiving Certificate of Appriciation from Nepal Army",
    image: "/images/Honor/army.jpeg",
  },
  {
    title: "National Actress Appriciation-2080 (2023)",
    description: "Certificate of Appriciation from Rose Beauty Academy",
    image: "/images/Honor/actresshonor.JPG",
  },
  {
    title: "National Actress Appriciation-2080 (2023)",
    description: "Moment Captured while receiving National Actress Appreciation-2080 ",
    image: "/images/Honor/actresshonor2.JPG",
  },
  {
    title: "Everest Federal Credit Union Brand Ambassador",
    description: "Certificate of Brand Ambassador from Everest Federal Credit Union",
    image: "/images/Honor/everest-1.jpg",
  },
  {
    title: "113th Internatinal Womens Day",
    description: "Certificate of Appreciation on 113th Internationl Womens Day",
    image: "/images/Honor/womensday.jpeg",
  },
  {
    title: "Leadership Development & Role of Film Sector for Women Empowerment",
    description: "Certificate of Appreciation from Film Development Board Nepal",
    image: "/images/Honor/fdb-2.jpg",
  },
  {
    title: "Member of the Jury at National Film Award 2015",
    description: "Certificate of Appreciation from Film Development Board Nepal",
    image: "/images/Honor/fdb-3.jpg",
  },
  {
    title: "33rd Nepal Television Annual Function",
    description: "Certificate of Appreciation from Nepal Television",
    image: "/images/Honor/womensday.jpeg",
  },
  {
    title: "Gaijatra Comedy Challenge",
    description: "Certificate of Appreciation from Radio Annapurna Nepal",
    image: "/images/Honor/radio.jpg",
  },
  {
    title: "Civic Engagement Video Series, Chaso",
    description: "Certificate of Appreciation from Government of Nepal & USAID",
    image: "/images/Honor/usaid.jpg",
  },
  {
    title: "2nd FAAN Award 2073",
    description: "Certificate of Appreciation from FAAN Award",
    image: "/images/Honor/faan2.jpg",
  },
  {
    title: "FAAM Award 2072",
    description: "Certificate of Appreciation from FAAN Award",
    image: "/images/Honor/faan.jpg",
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