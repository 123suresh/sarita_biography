import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRouting";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailsPage";
import AwardPage from "../pages/AwardsPage";
import PressPage from "../pages/PressPage";
import PageNotFound from "../pages/PageNotFound";

function Routing() {
  return (
    <Router>
      <Routes>
        {/* <Route exact path="/" element={<HomePage />} /> */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/movie/:movieId" element={<MovieDetail />} /> */}
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/awards" element={<AwardPage />} />
          <Route path="/press" element={<PressPage />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default Routing;
