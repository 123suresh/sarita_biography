import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ImgAccordian from "../components/ImgAccordian";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: "40px 20px",
    color: "white",
    backgroundColor: "#212431",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    gap: "40px", // Add consistent spacing between sections
  },
  header: {
    textAlign: "center",
    color: "#f8f8f8",
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: "#f8b400", // Highlighted color for section titles
    textAlign: "center",
    marginBottom: "10px",
  },
  honorsAwardsSection: {
    padding: "20px",
    backgroundColor: "#2a2d3e",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", // Add subtle shadow for elevation
  },
  listItem: {
    fontSize: "1rem",
    lineHeight: "1.8",
    marginBottom: "10px",
    color: "#d1d1d1",
  },
  imgContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    marginTop: "30px",
  },
  footer: {
    marginTop: "auto", // Push footer to the bottom
    textAlign: "center",
    padding: "20px 0",
    borderTop: "1px solid #444",
    color: "#aaa",
  },
}));

function AwardPage() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* Header */}
      <Box className={classes.header}>
        <Typography variant="h3" style={{ fontWeight: "bold", color: "#fff" }}>
          HONORS & AWARDS
        </Typography>
      </Box>

      {/* Honors Section */}
      <Box className={classes.honorsAwardsSection}>
        <Typography className={classes.sectionTitle}>Honors</Typography>
        <ul style={{ paddingLeft: "20px" }}>
          <li className={classes.listItem}>
            National Actor Honor (2080) – Rose Beauty Academy
          </li>
          <li className={classes.listItem}>Jiwanta Nepal Music Award (2023)</li>
          <li className={classes.listItem}>
            Nepal Film Development Board Honor (2080)
          </li>
          <li className={classes.listItem}>
            National Personality & Creator Honor (2024)
          </li>
          <li className={classes.listItem}>
            Simple Honor (2080) – Simple Arts
          </li>
          <li className={classes.listItem}>
            Additional Honors from Prabhat Tara Awasiya Maha Bidhayalaya, NTV,
            Birat Kala Samuha, and others.
          </li>
        </ul>
      </Box>

      {/* Awards Section */}
      <Box className={classes.honorsAwardsSection}>
        <Typography className={classes.sectionTitle}>Awards</Typography>
        <ul style={{ paddingLeft: "20px" }}>
          <li className={classes.listItem}>Nepal Short Film Award (2023)</li>
          <li className={classes.listItem}>
            12th Nepal Africa Film Award (2024)
          </li>
          <li className={classes.listItem}>
            Box Office Telefilm Award (2021)
          </li>
        </ul>
      </Box>

      {/* Image Accordions Section */}
      <Box className={classes.imgContainer}>
        <Grid container spacing={3}>
          {["panel1", "panel2", "panel3", "panel4", "panel5", "panel6"].map(
            (panel, index) => (
              <Grid item md={4} sm={6} xs={12} key={index}>
                <ImgAccordian
                  imgPanel={panel}
                  expanded={false}
                  setExpanded={() => {}}
                  handleChange={() => {}}
                  style={{
                    aspectRatio: "2/3",
                    objectFit: "cover",
                    borderRadius: "10px",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)", // Shadow for images
                  }}
                />
              </Grid>
            )
          )}
        </Grid>
      </Box>

      {/* Footer */}
      <div className={classes.footer}>
        <Typography variant="body2" style={{ fontSize: "1rem" }}>
          © 2025 Sarita Lamichhane | All Rights Reserved.
        </Typography>
      </div>
    </div>
  );
}

export default AwardPage;
