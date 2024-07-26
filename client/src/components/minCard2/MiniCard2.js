import React from "react";
import styles from "./miniCard2.module.css";

const MiniCard2 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="./assets/food.png"></img>
      </div>
      <div className={styles.details}>
        <div className={styles.category}>
          <span>module</span>
        </div>
        <span className={styles.title}>
          Hallucinating intelligence: A looming challenge in the age of AI
          Hallucinating intelligence: A looming challenge in the age of AI
        </span>
        <div className={styles.footer}>
          <span className={styles.name}>Virat Kohli - </span>
          <span className={styles.date}>14.12.2000</span>
        </div>
      </div>
    </div>
  );
};

export default MiniCard2;
