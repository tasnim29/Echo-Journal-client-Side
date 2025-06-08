import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer";

const MainLayouts = () => {
  return (
    <div className="lato-light">
      <div>
        <header>
          <Navbar></Navbar>
        </header>
        <main className=" min-h-[calc(100vh-398px)] ">
          <Outlet></Outlet>
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </div>
    </div>
  );
};

export default MainLayouts;
