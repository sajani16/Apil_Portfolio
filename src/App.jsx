import React from "react";
import Navbar from "./Component/Common/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Common/Footer";
import ScrollToTop from "./Component/Common/ScrollToTop";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
