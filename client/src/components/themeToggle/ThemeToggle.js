import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import { ThemeContext } from "../../context/ThemeContext";

const ThemeToggle = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  return (
    <div className={styles.container}>
      <img src="./assets/moon.png" width={14} height={14} />
      <div className={styles.ball}></div>
      <img src="./assets/sun.png" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
