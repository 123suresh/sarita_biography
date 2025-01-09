import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export default function ImgAccordian({ imgPanel, handleChange, expanded, setExpanded }) {
  return (
    <Accordion expanded={expanded === imgPanel} onChange={handleChange(imgPanel)}>
      <AccordionSummary>
        <Grid container spacing={2} direction="column" justifyContent="center" alignItems="center" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;"}}>
          {/* Image Section */}
          <Grid item>
            <img
              src="http://narayanpuri.com/assets/images/awards/aarohan.jpg" // Replace with your image URL
              alt="Description of the image"
              style={{
                width: "80%", // Adjust the width as needed
                maxWidth: "500px", // Optional: Restrict the maximum width
                height: "auto", // Maintain aspect ratio
                objectFit: "contain", // Ensure the image fits the frame
              }}
            />
          </Grid>
          {/* Title Section */}
          <Grid item>
            <Typography sx={{ fontSize: "22px", textAlign: "center" }}>
              General settings
            </Typography>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        {/* Description Section */}
        <Typography sx={{ fontSize: "18px", textAlign: "center" }}>
          Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
          Aliquam eget maximus est, id dignissim quam.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}
