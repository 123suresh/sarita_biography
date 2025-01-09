import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <Box>
      <Typography variant="h5">404 Error Page not found</Typography>
      {/* <CommonButton onClick={() => navigate(-1)} buttonName="Go Back" /> */}
    </Box>
  );
};

export default PageNotFound;
