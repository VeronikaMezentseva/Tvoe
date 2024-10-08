import { FC, ReactNode } from "react";
import styles from "./series-section.module.scss";
import avatarCover from "../../images/avatarCover.png";
import { TInfoSeriesFakeData } from "@/fake-data/info-series/info-series";

export const SeriesSection: FC<{children: ReactNode, activeSlide: TInfoSeriesFakeData}> = ({children, activeSlide}) => {
  return (
    <section style={{
      background: `linear-gradient(180deg, rgba(9, 9, 12, 0) 50%, #09090c 92.09%),
      linear-gradient(180deg, #09090c 0%, rgba(15, 15, 15, 0) 50%),
      linear-gradient(90deg, #09090c 21.09%, rgba(9, 9, 12, 0) 50%),
      url(${activeSlide.image.src}) no-repeat center`
    }} className={styles["series-cover"]}>
      {children}
    </section>
  );
}