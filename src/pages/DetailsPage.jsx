import React, { useState } from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import MovieFrame from "../components/MovieFrame";
import { Fade } from "@mui/material";

const sections = {
  "Feature Films": [
    { title: "Santanko Maya", image: "/images/Featured-Films/santankomaya.jpg", description: "A love story that captures the essence of timeless emotions." },
    { title: "Shreeman Shreemati", image: "/images/Featured-Films/sriman-srimati.jpg", description: "A hilarious tale of a married couple’s misadventures." },
    { title: "Sita", image: "/images/Featured-Films/sita.jpeg", description: "A suspenseful short movie about hidden wealth and the chaos it causes." },
    { title: "Fingerprint", image: "/images/Featured-Films/fingerprint.jpg", description: "A drama focused on the importance of family security and values." },
    { title: "Sorry Mom", image: "/images/Featured-Films/sorrymom.jpg", description: "An ongoing mega serial aired on Ramilo HD, capturing hearts across Nepal." },
    { title: "Hawaldar", image: "/images/Featured-Films/hawaldar.jpg", description: "A record-breaking TV serial with the highest TRP on NTV." },
    { title: "Bar & Badhu", image: "/images/Featured-Films/bar-badhu.jpg", description: "A dreamlike journey of self-discovery and ambition." },
    { title: "Mangalam", image: "/images/Featured-Films/mangalam.jpg", description: "A gripping mystery that keeps you on the edge of your seat." },
  ],
  "Short Movies": [], // Will be filled below
  "TV Serials": [], // Will be filled below
};

// Copy Feature Films content to Short Movies and TV Serials
sections["Short Movies"] = [...sections["Feature Films"]];
sections["TV Serials"] = [...sections["Feature Films"]];

const DetailPage = () => {
  const [activeSection, setActiveSection] = useState("Feature Films");
  const [openDescriptionIndex, setOpenDescriptionIndex] = useState(null);
  const [visibleItemsCount, setVisibleItemsCount] = useState(6);

  const handleToggleDescription = (index) => {
    setOpenDescriptionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handleLoadMore = () => {
    setVisibleItemsCount((prevCount) => prevCount + 6);
  };

  const displayedItems = sections[activeSection].slice(0, visibleItemsCount);
  const hasMoreItems = visibleItemsCount < sections[activeSection].length;

  return (
    <Box
      sx={{
        padding: "100px 10%",
        color: "#A04455",
        backgroundColor: "#262528",
        minHeight: "100vh",
      }}
    >
      {/* Section Selector Buttons */}
      <Box sx={{ display: "flex", justifyContent: "center", gap: "20px", marginBottom: "30px" }}>
        {Object.keys(sections).map((section) => (
          <Button
            key={section}
            variant="contained"
            onClick={() => {
              setActiveSection(section);
              setVisibleItemsCount(6); // Reset visible items count on section change
              setOpenDescriptionIndex(null);
            }}
            sx={{
              backgroundColor: activeSection === section ? "#A04455" : "#666",
              "&:hover": { backgroundColor: "#555" },
            }}
          >
            {section}
          </Button>
        ))}
      </Box>

      {/* Movie Grid */}
      <Typography variant="h4" sx={{ textAlign: "center", marginBottom: "20px", fontWeight: "bold" }}>
        {activeSection}
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {displayedItems.map((item, index) => (
          <Fade key={index} in timeout={500}>
            <Grid item xs={12} sm={6} md={4}>
              <MovieFrame
                image={item.image}
                title={item.title}
                description={item.description}
                isOpen={openDescriptionIndex === index}
                onClick={() => handleToggleDescription(index)}
              />
            </Grid>
          </Fade>
        ))}
      </Grid>

      {/* Load More Button */}
      {hasMoreItems && (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
          <Button
            variant="contained"
            onClick={handleLoadMore}
            sx={{
              backgroundColor: "#444",
              "&:hover": { backgroundColor: "#A04455" },
            }}
          >
            Load More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default DetailPage;
