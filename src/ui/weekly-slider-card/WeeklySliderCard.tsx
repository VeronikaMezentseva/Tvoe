import { TWeeklyTopData } from "@/fake-data/weekly-top-data/weekly-top";
import { FC } from "react";
import styles from "./weekly-slider-card.module.scss";

export const WeeklySliderCard: FC<{cardData: TWeeklyTopData, index: number}> = ({cardData, index}) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["top-rate-container"]}>
        <p className={styles["top-rate"]}>{index + 1}</p>
      </div>
      <div className={styles["image-container"]}>
        <img className={styles["image"]} src={cardData.poster.src} alt="Постер" />
      </div>
    </div>
  );
}