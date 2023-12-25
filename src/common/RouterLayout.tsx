import React from "react";
//import { Navbar } from "./Navbar";
import { Outlet } from "react-router-dom";
import { Slidebar } from "./SlideBar";

export const RouterLayout: React.FC<{}>=() => {
  return (
    <>
      <Slidebar />
      <Outlet />
    </>
  )
}