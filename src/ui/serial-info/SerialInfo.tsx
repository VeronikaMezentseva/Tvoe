import { FC } from "react";
import { StaticImageData } from "next/image";
import styles from "./serial-info.module.scss";
import { TInfoSeriesFakeData } from "@/fake-data/info-series/info-series";
import seriesLogo from "../../images/avatarLogo.png";

export const SerialInfo: FC<{ data: TInfoSeriesFakeData }> = ({ data }) => {
  return (
    <div className={styles["serials-info-container"]}>
      <div>
        {data.filmLogo ? (
          <img src={data.filmLogo.src} alt={data.name} />
        ) : (
          <h2 className={styles["serials-info__title"]}>{data.name}</h2>
        )}
      </div>
      <div>
        <ul className={styles["serials-info__tags"]}>
          <li className={styles["serials-info__tag-item"]}>{data.rate}</li>
          <span className={styles["serials-info__dot"]}></span>
          <li className={styles["serials-info__tag-item"]}>{data.year}</li>
          <span className={styles["serials-info__dot"]}></span>
          <li className={styles["serials-info__tag-item"]}>{data.genre}</li>
          <span className={styles["serials-info__dot"]}></span>
          <li className={styles["serials-info__tag-item"]}>{data.country}</li>
          <span className={styles["serials-info__dot"]}></span>
          <li className={styles["serials-info__tag-item"]}>{data.ageRate}</li>
        </ul>
      </div>
    </div>
  );
};
