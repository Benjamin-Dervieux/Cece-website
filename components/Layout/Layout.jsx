import Head from "next/head";
import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import style from "./Layout.module.css";

const Layout = ({ children, pageTitle }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <meta name="description" content="Célia Roettger Blog" />
        <title>{pageTitle}</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
