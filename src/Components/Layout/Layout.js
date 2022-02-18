import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Fotter/Footer";
import Header from "../Header/Header";

function Layout({ children: SelectedPage }) {
  // Check If His Ban
  const {
    isBlock: { isBlacklist },
  } = useSelector((state) => state.info);

  return (
    <Fragment>
      <Navbar isBlock={isBlacklist} />
      <Header isBlock={isBlacklist} />
      <main className="pb-200px">{SelectedPage}</main>
      <Footer isBlock={isBlacklist} />
    </Fragment>
  );
}

export default Layout;
