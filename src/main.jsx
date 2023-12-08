import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import About from "./component/about/About.jsx";
import Skill from "./component/skill/Skill.jsx";
import Project from "./component/project/Project.jsx";
import Contact from "./component/contact/Contact.jsx";
import CopyRight from "./component/copyright/CopyRight.jsx";
import Root from "./pages/root/Root.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      ,
      {
        path: "/project",
        element: <Project></Project>,
      },
      {
        path: "/skills",
        element: <Skill></Skill>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
    
  },{
    path: "/copyright",
    element: <CopyRight></CopyRight>,
  },
  
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
