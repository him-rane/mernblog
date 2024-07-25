import React from "react";
import styles from "./card.module.css";
import { Link } from "react-router-dom";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src="./assets/food.png"></img>
      </div>
      <div className={styles.details}>
        <div className={styles.header}>
          <span className={styles.date}>14-12-2000 </span>
          <span className={styles.category}>-Culture</span>
        </div>

        <h4 className={styles.title}>
          Hallucinating intelligence: A looming challenge in the age of AI
          Hallucinating intelligence: A looming challenge in the age of AI
        </h4>
        <p className={styles.decs}>
          Artificial intelligence (AI) is no longer confined to the realm of
          science fiction. From facial recognition software to recommendation
          algorithms, AI is rapidly transforming every facet of our lives. Its
          influence transcends economic boundaries, Artificial intelligence (AI)
          is no longer confined to the realm of science fiction. From facial
          recognition software to recommendation algorithms, AI is rapidly
          transforming every facet of our lives. Its influence transcends
          economic boundaries, seamlessly integrating into the daily routines of
          individuals across both developed and developing regions. However,
          this rapid integration comes with a growing concern: AI hallucination.
        </p>

        <Link>ReadMore</Link>
      </div>
    </div>
  );
};

export default Card;
