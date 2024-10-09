'use client'

import { FC } from "react";
import styles from "./main-news-section.module.scss";
import MultipleItems from "../news-slider/NewsSlider";

export const MainNewsSection: FC = () => {
  return (
    <div className={styles["news-section"]}>
      <h2 className={styles.title}>Новинки</h2>
      <div>
        <MultipleItems></MultipleItems>
      </div>
    </div>
  );
}