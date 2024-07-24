import React from "react";
import styles from "./card.module.css";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="./assets/p1.jpeg"></img>
      </div>
      <div className={styles.text}>
        <div className={styles.detail}>
          <span className={styles.date}>14-12-200</span>
          <span className={styles.category}>Culture</span>
        </div>
        <h1>
          Neque porro quisquam est qui dolorem ipsum quia dolor sit
          amet,consectetur, adipisci velit..
        </h1>
        <p>
          Vestibulum suscipit iaculis felis, in placerat metus cursus et.
          Praesent elit lacus, ornare at ligula facilisis, varius vestibulum
          dui. Vivamus auctor mauris convallis, lobortis nisl sed, viverra erat.
          Maecenas ultrices ligula sit amet nisi iaculis, vitae mattis nunc
          condimentum. Duis augue libero, pretium at odio quis, tincidunt
          imperdiet dui. Proin eu efficitur neque. Suspendisse lacus tellus,
          vestibulum et efficitur vitae, ornare ut nulla.
        </p>
        <Link>ReadMore</Link>
      </div>
    </div>
  );
};

export default Card;
