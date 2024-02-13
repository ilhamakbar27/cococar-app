// import React from 'react'

import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Nav from "../../components/nav";

const Rootlayout = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Rootlayout;
