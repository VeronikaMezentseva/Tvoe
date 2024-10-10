'use client';

import { FC } from "react";
import styles from "./main-weekly-top-section.module.scss";
import WeeklyTopSlider from "../weekly-top-slider/WeeklyTopSlider";

export const MainWeeklyTopSection: FC = () => {
  return (
    <section className={styles["weekly-top-section"]}>
      <h2 className={styles["title"]}>ТОП-10 НЕДЕЛИ</h2>
      <WeeklyTopSlider></WeeklyTopSlider>
    </section>
  );
}