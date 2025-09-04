import React from "react";
import Navbar from "./Component/Common/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Component/Common/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
