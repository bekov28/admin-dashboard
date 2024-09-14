import React from "react";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./scrollTop";
import DrawerMobileNavigation from "./components/sidebar";
import Motor from "./components/motor";

const RouterComponent = () => {
  return (
    <>
      <DrawerMobileNavigation />
      <ScrollToTop />
      <Routes>
        <Route path="/" />
        <Route path="/motor" element={<Motor />} />
      </Routes>
    </>
  );
};

export default RouterComponent;
