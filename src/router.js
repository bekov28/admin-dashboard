import React from "react";
import { Route, Router, Routes, useLocation } from "react-router-dom";
import ScrollToTop from "./components/scrollTop";
import DrawerMobileNavigation from "./components/sidebar";
import Motor from "./components/motor";
import Caravan from "./components/caravan";
import Tuning from "./components/tuning";
import UsedCar from "./components/usedCar";
import Camping from "./components/camping";

const RouterComponent = () => {
  return (
    <>
      <DrawerMobileNavigation />
      <ScrollToTop />
      <Routes>
        <Route path="/" />
        <Route path="/motor" element={<Motor />} />
        <Route path="/caravan" element={<Caravan />} />
        <Route path="/tuning" element={<Tuning />} />
        <Route path="/UsedCar" element={<UsedCar />} />
        <Route path="/camping" element={<Camping />} />
      </Routes>
    </>
  );
};

export default RouterComponent;
