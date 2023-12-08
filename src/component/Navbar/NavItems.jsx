import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavItems = () => {
  const Links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Project",
      link: "/project",
    },
    {
      name: "Skills",
      link: "/skills",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ];

 
  return (
    <>
      {Links.map((link, i) => (
        <li key={i} className="font-semibold hover:text-primary-color">
          <NavLink style={({ isActive, isPending }) => {
            return {
              color: isActive ? "#00ABF0" : "inherit",
            };
          }}
            className={({ isActive, isPending }) => {
              return isActive ? "active" : isPending ? "pending" : "";
            }} to={link.link}>{link.name}</NavLink>
        </li>
      ))}
    </>
  );
};

export default NavItems;
