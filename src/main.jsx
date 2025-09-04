import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import Home from "./Component/Pages/Home";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import Services from "./Component/Pages/Services";
import Projects from "./Component/Pages/Projects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/services", element: <Services /> },
      { path: "/projects", element: <Projects /> },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
