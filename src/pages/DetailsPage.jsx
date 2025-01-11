import React, { useState } from "react";
import { Grid, Typography, Button, Box, Pagination } from "@mui/material";
import MovieFrame from "../components/MovieFrame";

const sections = {
  "Feature Films": [
    { title: "Santanko Maya", image: "/images/Featured-Films/img1.jpg", description: "A love story that captures the essence of timeless emotions." },
    { title: "Shreeman Shreemati", image: "/images/Featured-Films/img2.jpeg", description: "A hilarious tale of a married couple’s misadventures." },
    { title: "Love Forever", image: "/images/Featured-Films/img3.jpg", description: "A timeless classic about love and perseverance." },
    { title: "Kalo Dhan", image: "/images/Featured-Films/img4.jpg", description: "A suspenseful short movie about hidden wealth and the chaos it causes." },
    { title: "Surakshya", image: "/images/Featured-Films/img5.jpg", description: "A drama focused on the importance of family security and values." },
    { title: "Dristi", image: "/images/Featured-Films/img6.jpg", description: "An ongoing mega serial aired on Ramilo HD, capturing hearts across Nepal." },
    { title: "Parichaya", image: "/images/Featured-Films/img7.jpg", description: "A record-breaking TV serial with the highest TRP on NTV." },
    { title: "Sapana Ko Sansar", image: "/images/Featured-Films/img8.jpg", description: "A dreamlike journey of self-discovery and ambition." },
    { title: "The Secret", image: "/images/Featured-Films/img9.jpg", description: "A gripping mystery that keeps you on the edge of your seat." },
  ],
  "Short Movies": [],
  "TV Serials": [],
};

const DetailPage = () => {
  const [activeSection, setActiveSection] = useState("Feature Films");
  const [openDescriptionIndex, setOpenDescriptionIndex] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const handleToggleDescription = (index) => {
    setOpenDescriptionIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    setOpenDescriptionIndex(null);
  };

  const displayedItems = sections[activeSection].slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(sections[activeSection].length / itemsPerPage);

  return (
    <Box
      sx={{
        padding: "20px 10%",
        color: "#fff",
        backgroundColor: "#212431",
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
              setCurrentPage(1);
              setOpenDescriptionIndex(null);
            }}
            sx={{
              backgroundColor: activeSection === section ? "#444" : "#666",
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
          <Grid item xs={12} sm={6} md={4} key={index}>
            <MovieFrame
              image={item.image}
              title={item.title}
              description={item.description}
              isOpen={openDescriptionIndex === index}
              onClick={() => handleToggleDescription(index)}
            />
          </Grid>
        ))}
      </Grid>

      {/* Pagination */}
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default DetailPage;