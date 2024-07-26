import React from "react";
import Card from "../card/Card";
import MiniCard from "../minCard/MiniCard";
import styles from "./mainContent.module.css";
import MiniCard2 from "../minCard2/MiniCard2";

const MainContent = () => {
  return (
    <div className={styles.container}>
      <div className={styles.recent}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
      <div className={styles.popular}>
        <MiniCard></MiniCard>
        <MiniCard></MiniCard>
        <MiniCard></MiniCard>
        <MiniCard></MiniCard>

        <MiniCard2></MiniCard2>
        <MiniCard2></MiniCard2>
        <MiniCard2></MiniCard2>
        <MiniCard2></MiniCard2>
      </div>
    </div>
  );
};

export default MainContent;
