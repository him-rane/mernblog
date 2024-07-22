import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import ThemeToggle from "../themeToggle/ThemeToggle";
import AuthLinks from "../authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <img src="./assets/instagram.png"></img>
        <img src="./assets/facebook.png"></img>
        <img src="./assets/youtube.png"></img>
      </div>
      <div className={styles.logo}>himblog</div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link to="/">Home</Link>
        <Link to="/">Contact</Link>
        <Link to="/">About</Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
