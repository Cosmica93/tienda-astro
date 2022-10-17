import React from "react";
import {NavBar} from "../Navbar/NavBar";

export const Layout = ({children}) => {
  return (
    <div>
      <NavBar/>
      {children}
    </div>
  )
}