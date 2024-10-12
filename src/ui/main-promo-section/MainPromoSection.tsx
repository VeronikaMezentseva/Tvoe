'use client';

import { FC, useEffect, useState } from "react";
import styles from "./main-promo-section.module.scss";
import newsIcon from "../../images/newsIcon.png";
import deviceIcon from "../../images/deviceIcon.png";
import starIcon from "../../images/starIcon.png";
import likeIcon from "../../images/likeIcon.png";
import { MainDecorationBlocks } from "../main-decoration-blocks/MainDecorationBlocks";
import { Button } from "../button/Button";
import { useWindowSize } from "@/utils/hooks/useWindowSize";

export const MainPromoSection: FC = () => {
  
  const windowWidth = useWindowSize().width;
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(windowWidth < 500 ? true : false);
  }, [windowWidth]);

  return (
    <section className={styles["promo-section"]}>
      <h2 className={styles["promo-title"]}>Смотри мировые премьеры</h2>
      <div className={styles["paragraphs-block"]}>
        <div className={styles["promo-paragraph-container"]}>
          <div className={styles["promo-paragraph"]}>
            <img src={newsIcon.src} alt="" />
            <p>Новинки каждую неделю</p>
          </div>
          <div className={styles["promo-paragraph"]}>
            <img src={deviceIcon.src} alt="" />
            <p>На любом устройстве</p>
          </div>
        </div>
        <div className={styles["promo-paragraph-container"]}>
          <div className={styles["promo-paragraph"]}>
            <img src={starIcon.src} alt="" />
            <p>Без рекламы и доплат</p>
          </div>
          <div className={styles["promo-paragraph"]}>
            <img src={likeIcon.src} alt="" />
            <p>Эксклюзивная озвучка </p>
          </div>
        </div>
      </div>
      <div className={styles["action-block"]}>
        <Button extraClasses="button-centered-text" text={`${!isMobile ? 'Попробовать бесплатно' : 'Смотреть бесплатно'}`} accent={true}></Button>
        <p className={styles["action-block__paragraph"]}>далее от 166 ₽/мес</p>
      </div>
      <MainDecorationBlocks></MainDecorationBlocks>
    </section>
  );
};
