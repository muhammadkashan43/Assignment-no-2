
import React from "react";
import Link from "next/link";
import Style from "../Styles/header.module.css";

const Header = () => {
  return (
    <>
      <nav className={Style.nav}>
        <h1 className={Style.logo}>
          <pre>
            Muhammad <span className={Style.span}>kashan</span>
          </pre>
        </h1>
 
        <ul>
          <li >
            <Link href="/">Home</Link>
          </li>
          <li >
            <Link href="../Sections/about-us">
              About
            </Link>
          </li>
          <li >
            <Link href="../Sections/services">Service</Link>
          </li>
          <li >
            <Link href="../Sections/portfolio">Portfolio</Link>
          </li>
          <li >
            <Link href="../Sections/contact-us">Contact</Link>
          </li>
          <li >
            <button className={Style.button}>Join Us</button>
          </li>
          </ul>
      </nav>
    </>
  );
};


export default Header;
