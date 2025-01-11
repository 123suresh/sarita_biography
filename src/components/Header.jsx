import React from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";

const useStyles = makeStyles(() => ({
  navbar__main: {
    backgroundColor: "#212431",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "30px",
  },
  link: {
    textDecoration: "none",
    color: "#f4f3f7",
    fontSize: "20px",
    textAlign: "center",
    paddingLeft: "50px",
    transition: "color 0.3s ease", // Animation for color change
    "&:hover": {
      color: "#F25464", // Change color on hover
    },
  },
  active__link: {
    color: "#F25464", // Highlight active link color
    fontWeight: "bold", // Bold text for active link
  },
  logoLink: {
    textDecoration: "none",
    color: "white",
    "&:hover": {
      color: "#F25464",
    },
  },
  contactLink: {
    paddingRight: "50px", // Add right padding to the Contact link
  },
  logoImage: {
    width: "300px", // Adjust size as per your need
    height: "auto",
    paddingLeft: "50px",
  },
}));

const ResponsiveAppBar = () => {
  const classes = useStyles();
  const location = useLocation(); // Get the current pathname

  return (
    <div className={classes.navbar__main}>
      <Grid container spacing={3} justifyContent="space-between" alignItems="center">
        {/* Logo Section */}
        <Grid item>
          <Link to="/" className={classes.logoLink}>
            <img src="/icon/sarita.png" alt="Sarita Lamichhane" className={classes.logoImage} />
          </Link>
        </Grid>

        {/* Navigation Links Section */}
        <Grid item>
          <div>
            <Link
              className={`${classes.link} ${location.pathname === "/" ? classes.active__link : ""}`}
              to="/"
            >
              Home
            </Link>
            <Link
              className={`${classes.link} ${location.pathname === "/about" ? classes.active__link : ""}`}
              to="/about"
            >
              About Me
            </Link>
            <Link
              className={`${classes.link} ${location.pathname === "/detail" ? classes.active__link : ""}`}
              to="/detail"
            >
              Portfolio
            </Link>
            <Link
              className={`${classes.link} ${location.pathname === "/awards" ? classes.active__link : ""}`}
              to="/awards"
            >
              Awards
            </Link>
            <Link
              className={`${classes.link} ${location.pathname === "/press" ? classes.active__link : ""}`}
              to="/press"
            >
              Press
            </Link>
            <Link
              className={`${classes.link} ${location.pathname === "/gallary" ? classes.active__link : ""}`}
              to="/gallary"
            >
              Gallary
            </Link>
            <Link
              className={`${classes.link} ${classes.contactLink} ${location.pathname === "/contact" ? classes.active__link : ""}`}
              to="/contact"
            >
              Contact
            </Link>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default ResponsiveAppBar;