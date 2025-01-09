import React from "react";
import { Grid, Divider } from "@mui/material";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import EmblaCarousel from "../components/Carousel";

const spanStyle = {
  padding: "20px",
  background: "#efefef",
  // color: "#000000",
};

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "400px",
};
const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    // caption: 'Slide 1'
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    // caption: 'Slide 2'
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    // caption: 'Slide 3'
  },{
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    // caption: 'Slide 3'
  },{
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    // caption: 'Slide 3'
  },{
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    // caption: 'Slide 3'
  },{
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    // caption: 'Slide 3'
  },
];

function DetailPage() {
  return (
    <div
      style={{
        paddingLeft: "80px",
        paddingRight: "80px",
        color: "white",
      }}
    >
      <Grid
        container
        spacing={3}
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        style={{ padding: "30px", color: "black" }}
      >
        <Grid item>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Divider
                sx={{
                  width: "100%",
                  borderColor: "white",
                  borderBottomWidth: 2,
                }}
              />
            </Grid>
            <Grid item style={{ fontSize: "25px" }}>
              Feature Films
            </Grid>
            <Grid item>
              <Divider
                sx={{
                  width: "100%",
                  borderColor: "white",
                  borderBottomWidth: 2,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <div className="slide-container">
        <EmblaCarousel images={slideImages.map(k=>k.url)}/>
       
      </div>

      <Grid
        container
        spacing={3}
        direction="column"
        // justifyContent="space-between"
        // alignItems="center"
        style={{ fontSize: "20px", paddingTop: "20px", color:"black" }}
      >
        <Grid item>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              1992
            </Grid>
            <Grid item xs={4}>
              Tapasya
            </Grid>
            <Grid item xs={4}>
              Director
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              1992
            </Grid>
            <Grid item xs={4}>
              Tapasya
            </Grid>
            <Grid item xs={4}>
              Director
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              1992
            </Grid>
            <Grid item xs={4}>
              Tapasya
            </Grid>
            <Grid item xs={4}>
              Director
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              1992
            </Grid>
            <Grid item xs={4}>
              Tapasya
            </Grid>
            <Grid item xs={4}>
              Director
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              1992
            </Grid>
            <Grid item xs={4}>
              Tapasya
            </Grid>
            <Grid item xs={4}>
              Director
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              1992
            </Grid>
            <Grid item xs={4}>
              Tapasya
            </Grid>
            <Grid item xs={4}>
              Director
            </Grid>
          </Grid>
        </Grid>

        <Grid item></Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        direction="column"
        justifyContent="space-between"
        alignItems="center"
        style={{ padding: "30px", color: "black" }}
      >
        <Grid item>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Divider
                sx={{
                  width: "100%",
                  borderColor: "white",
                  borderBottomWidth: 2,
                }}
              />
            </Grid>
            <Grid item style={{ fontSize: "25px" }}>
              Documentries
            </Grid>
            <Grid item>
              <Divider
                sx={{
                  width: "100%",
                  borderColor: "white",
                  borderBottomWidth: 2,
                }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item></Grid>
      </Grid>

      <Grid
        container
        spacing={3}
        direction="column"
        // justifyContent="space-between"
        // alignItems="center"
        style={{ fontSize: "20px", paddingTop: "20px", color:"black" }}
      >
        {/* <Grid item>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              Abhiyan Sakaratmak Sochko
            </Grid>
            <Grid item xs={4}>
              Director
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              Akhtiyar Ek Chinari
            </Grid>
            <Grid item xs={4}>
              Director
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              Hariyo ban nepal ko dhan
            </Grid>
            <Grid item xs={4}>
              Director
            </Grid>
          </Grid>
        </Grid> */}


        
<Grid item>
      <Grid container spacing={3} alignItems="center" justifyContent="space-evenly">
        <Grid item>Abhiyan Sakaratmak Sochko</Grid>
        <Grid item>Director</Grid>
      </Grid>
      <Grid container spacing={3} alignItems="center" justifyContent="space-evenly" style={{ marginTop: "20px" }}>
        <Grid item>Abhiyan Sakaratmak Sochko</Grid>
        <Grid item>Director</Grid>
      </Grid>
      <Grid container spacing={3} alignItems="center" justifyContent="space-evenly" style={{ marginTop: "20px" }}>
        <Grid item>Abhiyan Sakaratmak Sochko</Grid>
        <Grid item>Director</Grid>
      </Grid>
    </Grid>




      </Grid>
    </div>
  );
}

export default DetailPage;
