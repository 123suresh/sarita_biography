import React from "react";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ImgAccordian from "../components/ImgAccordian";

const useStyles = makeStyles((theme) => ({}));

function AwardPage() {
  const classes = useStyles();

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <div style={{ padding: "30px" }}>
        <Grid
        container
        spacing={3}
        // justifyContent="space-between"
        // alignItems="center"
      >


        <Grid item>
        <Grid
        container
        spacing={3}
        // justifyContent="space-between"
        // alignItems="center"
      >
        <Grid item md ={4} sm={12}>
        <ImgAccordian imgPanel="panel1" handleChange={handleChange} expanded={expanded} setExpanded={setExpanded}/>
        </Grid>
        <Grid item md ={4} sm={12}>
        <ImgAccordian imgPanel="panel2" handleChange={handleChange} expanded={expanded} setExpanded={setExpanded}/>
        </Grid>
        <Grid item md ={4} sm={12}>
        <ImgAccordian imgPanel="panel3" handleChange={handleChange} expanded={expanded} setExpanded={setExpanded}/>
        </Grid>

        </Grid>
        </Grid>


        <Grid item>
        <Grid
        container
        spacing={3}
        // justifyContent="space-between"
        // alignItems="center"
      >
        <Grid item md ={4} sm={12}>
        <ImgAccordian imgPanel="panel4" handleChange={handleChange} expanded={expanded} setExpanded={setExpanded}/>
        </Grid>
        <Grid item md ={4} sm={12}>
        <ImgAccordian imgPanel="panel5" handleChange={handleChange} expanded={expanded} setExpanded={setExpanded}/>
        </Grid>
        <Grid item md ={4} sm={12}>
        <ImgAccordian imgPanel="panel6" handleChange={handleChange} expanded={expanded} setExpanded={setExpanded}/>
        </Grid>

        </Grid>
        </Grid>


      </Grid>






        {/* <ImgAccordian imgPanel="panel1" handleChange={handleChange} expanded={expanded} setExpanded={setExpanded}/>
        <ImgAccordian imgPanel="panel2" handleChange={handleChange} expanded={expanded} setExpanded={setExpanded}/>
        <ImgAccordian imgPanel="panel3" handleChange={handleChange} expanded={expanded} setExpanded={setExpanded}/>
        <ImgAccordian imgPanel="panel4" handleChange={handleChange} expanded={expanded} setExpanded={setExpanded}/> */}
    </div>
  );
}

export default AwardPage;
