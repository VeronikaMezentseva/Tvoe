import { TNewsData } from "@/fake-data/news-data/news-data";
import { FC } from "react";
import styles from "./news-slider-card.module.scss";

export const NewsSliderCard: FC<{ newsData: TNewsData }> = ({ newsData }) => {
  return (
    <div className={styles["card"]}>
      <div className={styles["image-container"]}>
        <div className={styles["labels-container"]}>
          <span className={styles["rate-label"]}>{newsData.rate}</span>
          {newsData.isNewSeason ? (
            <span className={styles["new-label"]}>Новый сезон</span>
          ) : null}
        </div>
        <img
          className={styles.image}
          src={newsData.image.src}
          alt={newsData.name}
        />
      </div>
      <h3 className={styles["card-title"]}>{newsData.name}</h3>
      <p
        className={styles["card-paragraph"]}
      >{`${newsData.year}, ${newsData.duration}`}</p>
    </div>
  );
};
