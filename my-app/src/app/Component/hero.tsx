
import React from "react";
import Style from "../Styles/hero.module.css";

const Hero  = () => {
  return (
        <div className={Style.hero}>
          <h1>Welcome to My Website</h1>
          <p> I&apos;m a web developer and I&apos;m here to create amazing websites
            for you. Let&apos;s connect and build something special together.</p>
        </div>
  )
}   
export default Hero;