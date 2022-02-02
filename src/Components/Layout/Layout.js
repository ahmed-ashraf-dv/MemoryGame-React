import React, { Fragment } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Fotter/Footer";
import Header from "../Header/Header";

function Layout({ children: SelectedPage }) {
  return (
    <Fragment>
      <Navbar />
      <Header />
      <main style={{ paddingBottom: "200px" }}>{SelectedPage}</main>
      <Footer />
    </Fragment>
  );
}

export default Layout;
