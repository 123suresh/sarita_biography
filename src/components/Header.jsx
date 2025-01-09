import * as React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  navbar__main: {
    backgroundColor: "#8e5353",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
  },
//   link_set: {
//     // paddingLeft: "80px",
//     [theme.breakpoints.down("sm")]: {
//       display: "flex",
//       flexDirection: "column",
//     },
//   },
  // avatar: {
  //   marginRight: "50px",
  //   padding: "10px",
  // },
  // avatarContent: {
  //   textAlign: "center",
  //   padding: "10px",
  // },
  link: {
    textDecoration: "none",
    color: "floralwhite",
    fontSize: "20px",
    textAlign: "center",
    alignItems: "center",
    paddingLeft: "50px",
    // [theme.breakpoints.down("sm")]: {
    //   padding: "10px",
    // },
  },
  active__link: {
    color: "rgb(255, 208, 0)",
  },
}));

const ResponsiveAppBar = () => {
  const classes = useStyles();

  const [activeLink, setActiveLink] = React.useState(null);

  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <div className={classes.navbar__main}>
      <div className={classes.link_set}>
        <Link
          onClick={() => handleActiveLink("home")}
          className={`${classes.link} ${
            window.location.pathname === "/home"
              ? classes.active__link
              : ""
          }`}
          to="/home"
        >
          Biography
        </Link>
        <Link
          onClick={() => handleActiveLink("detail")}
          className={`${classes.link} ${
            window.location.pathname === "/detail"
              ? classes.active__link
              : ""
          }`}
          to="/detail"
        >
          Work
        </Link>

        <Link
          onClick={() => handleActiveLink("awards")}
          className={`${classes.link} ${
            window.location.pathname === "/awards"
              ? classes.active__link
              : ""
          }`}
          to="/awards"
        >
          Awards
        </Link>

        <Link
          onClick={() => handleActiveLink("press")}
          className={`${classes.link} ${
            window.location.pathname === "/press"
              ? classes.active__link
              : ""
          }`}
          to="/press"
        >
          Press
        </Link>

        

      </div>
      <div className={classes.avatar}>

      </div>
    </div>
  );
};
export default ResponsiveAppBar;
