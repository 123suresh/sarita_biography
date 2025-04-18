import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRouting";
import HomePage from "../pages/HomePage";
import DetailPage from "../pages/DetailsPage";
import AwardPage from "../pages/AwardsPage";
import PressPage from "../pages/PressPage";
import AboutMe from "../pages/AboutMe";
import Contact from "../pages/Contact";
import PageNotFound from "../pages/PageNotFound";
import Gallery from "../pages/Gallery";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
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
