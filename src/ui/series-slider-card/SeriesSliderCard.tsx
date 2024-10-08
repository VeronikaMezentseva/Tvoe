import { FC } from "react";
import styles from "./series-slider-card.module.scss";
import { TInfoSeriesFakeData } from "@/fake-data/info-series/info-series";

export const SeriesSliderCard: FC<{ fakeData: TInfoSeriesFakeData, onClick: (evt: any) => void }> = ({
  fakeData,
  onClick
}) => {
  return (
    <div onClick={onClick} className={styles["slider-item"]}>
      <img
        className={styles["image-container"]}
        src={fakeData.image.src}
        alt={fakeData.name}
      />
    </div>
  );
};
