import React from "react";
import styles from "./categoryList.module.css";
import { Link } from "react-router-dom";

const CategoryList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        <Link to="" className={`${styles.category} ${styles.style}`}>
          <img className={styles.image} src="./assets/style.png" />
          <p1 className={styles.name}>tech</p1>
        </Link>
        <Link to="" className={`${styles.category} ${styles.style}`}>
          <img className={styles.image} src="./assets/style.png" />
          <p1 className={styles.name}>sports</p1>
        </Link>
        <Link to="" className={`${styles.category} ${styles.style}`}>
          <img className={styles.image} src="./assets/style.png" />
          <p1 className={styles.name}>science</p1>
        </Link>
        <Link to="" className={`${styles.category} ${styles.style}`}>
          <img className={styles.image} src="./assets/style.png" />
          <p1 className={styles.name}>style</p1>
        </Link>
        <Link to="" className={`${styles.category} ${styles.style}`}>
          <img className={styles.image} src="./assets/style.png" />
          <p1 className={styles.name}>health</p1>
        </Link>
        <Link to="" className={`${styles.category} ${styles.style}`}>
          <img className={styles.image} src="./assets/style.png" />
          <p1 className={styles.name}>travel</p1>
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
