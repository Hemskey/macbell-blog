import React, { useContext } from "react";
import Navbar from "./Navbar";
import Footer from "../layout/Footer";
import { NavContext } from "../../context/NavCloseContext";

function Layout(props) {
  const { open, setOpen } = useContext(NavContext);
  return (
    <>
      <Navbar />
      <main onClick={() => setOpen(false)}>{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
