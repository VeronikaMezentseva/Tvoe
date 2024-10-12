import { FC } from "react";
import styles from "./main-decoration-blocks.module.scss";
import doctorImage from "../../images/promo-decoration-images/doctor.jpeg";
import eliteImage from "../../images/promo-decoration-images/elite.jpeg";
import emilyImage from "../../images/promo-decoration-images/emily.png";
import sweetHomeImage from "../../images/promo-decoration-images/sweetHome.png";

export const MainDecorationBlocks: FC = () => {
  return (
    <div className={styles["decorate"]}>
      <div className={styles["decorate-container"]}>
        <div className={`${styles["row-block"]}`}>
          <img className={styles["image"]} src={eliteImage.src} alt="" />
          <img className={styles["image"]} src={doctorImage.src} alt="" />
          <img className={styles["image"]} src={emilyImage.src} alt="" />
        </div>
        <div className={`${styles["row-block"]} ${styles["row-block-second"]}`}>
          <img className={styles["image"]} src={sweetHomeImage.src} alt="" />
          <img className={styles["image"]} src={emilyImage.src} alt="" />
          <img className={styles["image"]} src={eliteImage.src} alt="" />
        </div>
        <div className={`${styles["row-block"]} ${styles["row-block-third"]}`}>
          <img className={styles["image"]} src={eliteImage.src} alt="" />
          <img className={styles["image"]} src={doctorImage.src} alt="" />
          <img className={styles["image"]} src={sweetHomeImage.src} alt="" />
        </div>
      </div>
    </div>
  );
};
