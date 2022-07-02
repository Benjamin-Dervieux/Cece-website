import Head from "next/head";
import React from "react";
import style from "./Layout.module.css";

const Layout = ({ children, pageTitle }) => {
  return (
    <div>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <meta name="description" content="Célia Roettger Blog" />
        <title>{pageTitle}</title>
      </Head>
      {children}
    </div>
  );
};

export default Layout;
