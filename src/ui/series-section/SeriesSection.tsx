import { FC, ReactNode, useEffect, useState } from "react";
import styles from "./series-section.module.scss";
import avatarCover from "../../images/avatarCover.png";
import { TInfoSeriesFakeData } from "@/fake-data/info-series/info-series";
import { useWindowSize } from "@/utils/hooks/useWindowSize";

export const SeriesSection: FC<{
  children: ReactNode;
  activeSlide: TInfoSeriesFakeData;
}> = ({ children, activeSlide }) => {

  const getClass = () => {
    if (useWindowSize().width < 600) {
      return mobileClass;
    } else {
      return desktopClass;
    }
  }

  const mobileClass = `linear-gradient(359.95deg, #09090C 19.4%, rgba(9, 9, 12, 0) 52.5%),
  url(${activeSlide.image.src}) center / cover no-repeat`;

  const desktopClass = `linear-gradient(180deg, rgba(9, 9, 12, 0) 50%, #09090c 92.09%),
  linear-gradient(180deg, #09090c 0%, rgba(15, 15, 15, 0) 50%),
  linear-gradient(90deg, #09090c 21.09%, rgba(9, 9, 12, 0) 50%),
  url(${activeSlide.image.src}) no-repeat center`;


  return (
    <section
      style={
        {
        background: `${getClass()}`
      }}
      className={styles["series-cover"]}
    >
      {children}
    </section>
  );
};