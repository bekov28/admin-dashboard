import React from "react";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./scrollTop";
import DrawerMobileNavigation from "./components/sidebar";

const RouterComponent = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<DrawerMobileNavigation />} />
      </Routes>
    </>
  );
};

export default RouterComponent;
