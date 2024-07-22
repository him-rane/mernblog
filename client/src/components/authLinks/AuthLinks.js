import React from "react";
import styles from "./authLinks.module.css";
import { Link } from "react-router-dom";

const AuthLinks = () => {
  const loginStatus = true;
  return (
    <div className={styles.contains}>
      {loginStatus ? (
        <>
          <Link to="/login">Login</Link>
        </>
      ) : (
        <>
          <Link to="/write">write</Link>
          <span>Logout</span>
        </>
      )}
    </div>
  );
};

export default AuthLinks;
