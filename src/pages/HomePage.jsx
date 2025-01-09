import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({}));

function HomePage() {
  const classes = useStyles();

  return (
    <div style={{ padding: "30px", color:"black" }}>
      <Grid
        container
        spacing={3}
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        style={{}}
      >
        <Grid item>
          <img
            src="http://narayanpuri.com/assets/images/works/doman.jpg"
            alt="Circular Image"
            style={{
              borderRadius: "50%", // Makes the image circular
              width: "300px", // Increased width
              height: "300px", // Increased height
              objectFit: "cover", // Ensures the image covers the entire circle area without distortion
              marginTop: "20px", // Adds space between the text and the image
            }}
          />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        style={{}}
      >
        <Grid item>
          <Grid
            container
            spacing={3}
            direction="column"
            justifyContent="space-between"
            // alignItems="center"
            style={{ padding: "30px", color: "black", fontSize: "25px" }}
          >
            <Grid item>Narayan Puri</Grid>
            <Grid item>Born January 14th, 1969</Grid>
            <Grid item>
              “Life and love has no definition. It is a lake that keeps the
              living struggling to reach the surface while prevents the dead
              from ever seeing the depths. The struggle to break through the
              surface is the essence of life.” Born in a middle class family,
              Narayan Puri is a person who believes in making a place for
              oneself in the world. He believes in respecting the experienced
              while loving and supporting beginners.
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
