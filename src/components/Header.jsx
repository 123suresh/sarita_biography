import React from "react";
import { Link, useLocation } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles(() => ({
  link: {
    textDecoration: "none",
    color: "#f4f3f7", // Light text color for contrast
    fontSize: "20px",
    transition: "color 0.3s ease",
    "&:hover": {
      color: "#A04455", // Highlighted link color
    },
  },
  active__link: {
    color: "#A04455",
    fontWeight: "bold",
  },
  contactLink: {
    paddingRight: "20px",
  },
}));

function ResponsiveAppBar() {
  const classes = useStyles();
  const location = useLocation();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "#262528", height: "64px" }}> {/* Updated color */}
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* Large Logo Section */}
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#"
            sx={{
              fontWeight: "bold",
              textDecoration: "none",
              color: "white",
              mr: 2,
              display: { xs: "none", md: "block" }, // Show on medium and large screens only
            }}
          >
            <img
              src="/icon/sarita.png"
              alt="Large Logo"
              style={{ width: "300px", height: "auto" }}
            />
          </Typography>

          {/* Menu Icon and Name for Small Screens */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" }, // Show only on small screens
              justifyContent: "space-between", // Space out the icon and name
              alignItems: "center", // Align items vertically
              width: "100%", // Full width
            }}
          >
            {/* Menu Icon on the Left */}
            <IconButton
              size="large"
              aria-label="navigation menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            {/* Name on the Right */}
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
                color: "white",
              }}
            >
              <img
                src="/icon/sarita.png"
                alt="Large Logo"
                style={{ width: "200px", height: "auto" }}
              />
            </Typography>
          </Box>

          {/* Hamburger Menu for Small Screens */}
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
          >
            <MenuItem onClick={handleCloseNavMenu}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  color: "black",
                }}
              >
                <Link
                  className={`${classes.link} ${
                    location.pathname === "/" ? classes.active__link : ""
                  }`}
                  to="/"
                >
                  <Typography
                    style={{
                      color: "black",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Home
                  </Typography>
                </Link>
                <Link
                  className={`${classes.link} ${
                    location.pathname === "/about" ? classes.active__link : ""
                  }`}
                  to="/about"
                >
                  <Typography
                    style={{
                      color: "black",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    About
                  </Typography>
                </Link>
                <Link
                  className={`${classes.link} ${
                    location.pathname === "/detail" ? classes.active__link : ""
                  }`}
                  to="/detail"
                >
                  <Typography
                    style={{
                      color: "black",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Portfolio
                  </Typography>
                </Link>
                <Link
                  className={`${classes.link} ${
                    location.pathname === "/awards" ? classes.active__link : ""
                  }`}
                  to="/awards"
                >
                  <Typography
                    style={{
                      color: "black",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Awards
                  </Typography>
                </Link>
                <Link
                  className={`${classes.link} ${
                    location.pathname === "/press" ? classes.active__link : ""
                  }`}
                  to="/press"
                >
                  <Typography
                    style={{
                      color: "black",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Press
                  </Typography>
                </Link>
                <Link
                  className={`${classes.link} ${
                    location.pathname === "/gallery" ? classes.active__link : ""
                  }`}
                  to="/gallery"
                >
                  <Typography
                    style={{
                      color: "black",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Gallery
                  </Typography>
                </Link>
                <Link
                  className={`${classes.link} ${
                    location.pathname === "/contact" ? classes.active__link : ""
                  }`}
                  to="/contact"
                >
                  <Typography
                    style={{
                      color: "black",
                      fontSize: "18px",
                      fontWeight: "700",
                    }}
                  >
                    Contact
                  </Typography>
                </Link>
              </Box>
            </MenuItem>
          </Menu>

          {/* Links Section for Medium and Large Screens */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end", // Align links to the right
              flexGrow: 1,
            }}
          >
            <Grid container spacing={2} alignItems="center" justifyContent="flex-end">
              <Grid item>
                <Link
                  className={`${classes.link} ${
                    location.pathname === "/" ? classes.active__link : ""
                  }`}
                  to="/"
                >
                  Home
                </Link>
              </Grid>
              <Grid item>
                <Link
                  className={`${classes.link} ${
                    location.pathname === "/about" ? classes.active__link : ""
                  }`}
                  to="/about"
                >
                  About Me
                </Link>
              </Grid>
              <Grid item>
                <Link
                  className={`${classes.link} ${
                    location.pathname === "/detail" ? classes.active__link : ""
                  }`}
                  to="/detail"
                >
                  Portfolio
                </Link>
              </Grid>
              <Grid item>
                <Link
                  className={`${classes.link} ${
                    location.pathname === "/awards" ? classes.active__link : ""
                  }`}
                  to="/awards"
                >
                  Awards
                </Link>
              </Grid>
              <Grid item>
                <Link
                  className={`${classes.link} ${
                    location.pathname === "/press" ? classes.active__link : ""
                  }`}
                  to="/press"
                >
                  Press
                </Link>
              </Grid>
              <Grid item>
                <Link
                  className={`${classes.link} ${
                    location.pathname === "/gallary" ? classes.active__link : ""
                  }`}
                  to="/gallary"
                >
                  Gallery
                </Link>
              </Grid>
              <Grid item>
                <Link
                  className={`${classes.link} ${
                    location.pathname === "/contact" ? classes.active__link : ""
                  }`}
                  to="/contact"
                >
                  Contact
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;