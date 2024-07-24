import React, { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";
import ThemeToggle from "../themeToggle/ThemeToggle";

const Navbar = () => {
  const loginStatus = true;
  const [open, setOpen] = useState(true);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.left}>himblog</div>
      <div className={styles.mid}>
        {!open && (
          <div className={styles.links}>
            <Link to="/">Home</Link>
            <Link to="/">Contact</Link>
            <Link to="/">About</Link>
            {loginStatus && <Link to="/login">Login</Link>}
            {!loginStatus && <Link to="/write">write</Link>}
            {!loginStatus && <Link>Logout</Link>}
          </div>
        )}

        {open && (
          <div className={styles.mobile_links}>
            <Link to="/">Home</Link>
            <Link to="/">Contact</Link>
            <Link to="/">About</Link>
            {loginStatus && <Link to="/login">Login</Link>}
            {!loginStatus && <Link to="/write">write</Link>}
            {!loginStatus && <Link>Logout</Link>}
          </div>
        )}
      </div>
      <div className={styles.right}>
        <ThemeToggle />
        <div className={styles.burger} onClick={() => setOpen(!open)}>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
          <div className={styles.line}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
