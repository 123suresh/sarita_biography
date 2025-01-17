import React, { useState } from "react";
import { Grid, Typography, Button, Box, Fade } from "@mui/material"; // Import Fade
import MovieFrame from "../components/MovieFrame";

const sections = {
  "Feature Films": [
    { title: "Santanko Maya", image: "/images/Featured-Films/santankomaya.jpg", description: "In Santanko Maya (2002), directed by the late Kishor Rana, I played the lead role of a mother whose deep love for her children drives the emotional core of the story. My portrayal captured the unconditional love and sacrifices that define a mother’s bond with her children." },
    { title: "Shreeman Shreemati", image: "/images/Featured-Films/sriman-srimati.jpg", description: "In Shreeman Shreemati (2011), directed by Rishi Lamichhane, I played the lead role, exploring the complexities of a husband and wife relationship. My performance delved into the emotional dynamics, highlighting the love, challenges, and misunderstandings that define marital bonds." },
    { title: "Sita", image: "/images/Featured-Films/sita.jpeg", description: "In Sita, directed by Raju Aryal, I played the lead role of a woman who, despite facing disabilities, triumphs and becomes a successful doctor. My performance highlighted the resilience and determination required to overcome life’s challenges and achieve personal success." },
    { title: "Fingerprint", image: "/images/Featured-Films/fingerprint.jpg", description: "In Fingerprint (2019), directed by Nabin Niraula, I portrayed the lead role of a wife in an intercaste marriage, showcasing the challenges and unconditional support within the relationship. My character stood by her husband through every situation, highlighting the strength of love and commitment." },
    { title: "Sorry Mom", image: "/images/Featured-Films/sorrymom.jpg", description: "In Sorry Mom (2023), directed by Navin Bogati, I played the lead role of a mother who supports her child through the struggles of drug addiction. The film aims to raise social awareness with its powerful message of Say No to Drugs, highlighting the strength and love a mother has to help her child overcome addiction." },
    { title: "Hawaldar Suntali", image: "/images/Featured-Films/hawaldar.jpg", description: "In Hawaldar Suntali (2015), directed by Rishi Lamichhane, I made a special appearance as a lawyer who works to solve societal discrimination issues. My role focused on advocating for justice and equality, reflecting the importance of addressing societal challenges." },
    { title: "Bar & Badhu", image: "/images/Featured-Films/bar-badhu.jpg", description: "In Bar and Badhu (2024), directed by Milan Chams, I made a special appearance as a mother, bringing depth and emotion to the role." },
    { title: "Mangalam", image: "/images/Featured-Films/mangalam.jpg", description: "In Mangalam (2018), directed by Nawal Nepal, I made a special appearance as a lawyer, where I played a key role in advocating for justice. " },
  ],
  "Short Movies": [
    { title: "Sampati", image: "/images/Short-Movies/sampati.jpg", description: "A love story that captures the essence of timeless emotions." },
    { title: "Prawasi", image: "/images/Short-Movies/prawasi.jpg", description: "A suspenseful short movie about hidden wealth and the chaos it causes." },
    { title: "Pahilo", image: "/images/Short-Movies/pahilo.jpg", description: "A drama focused on the importance of family security and values." },
    { title: "Kushal", image: "/images/Short-Movies/kushal.jpg", description: "An ongoing mega serial aired on Ramilo HD, capturing hearts across Nepal." },
    { title: "Dhan", image: "/images/Short-Movies/dhan.jpg", description: "A record-breaking TV serial with the highest TRP on NTV." },
    { title: "Baba", image: "/images/Short-Movies/baba.jpg", description: "A dreamlike journey of self-discovery and ambition." },
    { title: "Sahara", image: "/images/Short-Movies/sahara.jpg", description: "A hilarious tale of a married couple’s misadventures." },
    { title: "Aakros", image: "/images/Short-Movies/aakros.jpg", description: "A gripping mystery that keeps you on the edge of your seat." },
  ],
  "TV Serials": [
    { title: "Parichaya I", image: "/images/TV-Serial/parichaya-1.jpg", description: "A love story that captures the essence of timeless emotions." },
    { title: "Parichaya II", image: "/images/TV-Serial/parichaya-2.jpg", description: "A hilarious tale of a married couple’s misadventures." },
    { title: "Mukti", image: "/images/TV-Serial/mukti.jpg", description: "A suspenseful short movie about hidden wealth and the chaos it causes." },
    { title: "Maiti", image: "/images/TV-Serial/maiti.jpg", description: "A drama focused on the importance of family security and values." },
    { title: "Janaki", image: "/images/TV-Serial/janaki.jpg", description: "An ongoing mega serial aired on Ramilo HD, capturing hearts across Nepal." },
    { title: "Harayeko Saino", image: "/images/TV-Serial/harayeko.jpg", description: "A record-breaking TV serial with the highest TRP on NTV." },
    { title: "Dristi", image: "/images/TV-Serial/dristi.jpg", description: "A dreamlike journey of self-discovery and ambition." },
    { title: "Bhumika", image: "/images/TV-Serial/bhumika.jpg", description: "A gripping mystery that keeps you on the edge of your seat." },
  ],
};

// // Copy Feature Films content to Short Movies and TV Serials
// sections["Short Movies"] = [...sections["Feature Films"]];
// sections["TV Serials"] = [...sections["Feature Films"]];

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
    <div
      style={{
        padding: "90px 10%",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#262528",
        fontFamily: "'Poppins', sans-serif",
        color: "#FBFBF3",
        overflow: "hidden",
      }}
    >
      {/* Animation Wrapper */}
      <div
        style={{
          flex: 1,
          position: "relative",
          animation: "fadeIn 2s ease-in-out",
        }}
      >
        {/* Page Header */}
        <Typography
          variant="h3"
          style={{
            fontSize: "50px",
            marginTop: "10px",
            marginBottom: "30px",
            textAlign: "center",
            color: "#CDBFA7 ",
            fontWeight: "bold",
            animation: "fadeInFromTop 1.5s forwards",
            opacity: 0,
          }}
        >
          MY PORTFOLIO
        </Typography>

        {/* Section Buttons */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          {Object.keys(sections).map((section, index) => (
            <Button
              key={index}
              variant="contained"
              onClick={() => {
                setActiveSection(section);
                setVisibleItemsCount(6);
                setOpenDescriptionIndex(null);
              }}
              sx={{
                backgroundColor: activeSection === section ? "#A04455" : "#666",
                "&:hover": { backgroundColor: "#555" },
                animation: `fadeInFromLeft 1.5s ease ${index * 0.3}s forwards`,
                opacity: 0,
              }}
            >
              {section}
            </Button>
          ))}
        </Box>

        {/* Movie Grid */}
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: "20px", fontWeight: "bold" }}
        >
          {activeSection}
        </Typography>
        <Grid
          container
          spacing={1}
          justifyContent="center"
          sx={{ paddingLeft: 10, paddingRight: 10}}
        >
          {displayedItems.map((item, index) => (
            <Fade key={index} in timeout={500}>
              <Grid item xs={12} sm={6} md={3} lg={4} sx={{ marginBottom: 5 }}
              style={{
                animation: `zoomIn 1.4s ease ${index * 0.1}s forwards`, // Staggered zoom-in animation for movie cards
                opacity: 100,
              }}
              >
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
          <Box
            sx={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
          >
            <Button
              variant="contained"
              onClick={handleLoadMore}
              sx={{
                backgroundColor: "#444",
                "&:hover": { backgroundColor: "#A04455" },
                animation: "fadeIn 1.5s ease 0.5s forwards",
                opacity: 0,
              }}
            >
              Load More
            </Button>
          </Box>
        )}
      </div>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes fadeInFromLeft {
            from {
              opacity: 0;
              transform: translateX(-50px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          @keyframes fadeInFromTop {
            from {
              opacity: 0;
              transform: translateY(-50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @keyframes zoomIn {
            from {
              transform: scale(0.8);
            }
            to {
              transform: scale(1);
            }
          }
        `}
      </style>
    </div>
  );
};

export default DetailPage;
