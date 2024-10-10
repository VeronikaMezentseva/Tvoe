import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NewsSliderCard } from "../news-slider-card/NewsSliderCard";
import { newsData } from "@/fake-data/news-data/news-data";
import styles from "./weekly-top-slider.module.scss";
import { weeklyTop } from "@/fake-data/weekly-top-data/weekly-top";
import { WeeklySliderCard } from "../weekly-slider-card/WeeklySliderCard";

function NextArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      className={styles["slider-next-arrow"]}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: any) {
  const { style, onClick } = props;
  return (
    <div
      className={styles["slider-prev-arrow"]}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

const WeeklyTopSlider: FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow></NextArrow>,
    prevArrow: <PrevArrow></PrevArrow>,
  };
  return (
    <div className={styles["slider-container"]}>
      <div className="slider-container">
        <Slider {...settings}>
          {weeklyTop.map((dataItem, index) => {
            return (
              <WeeklySliderCard cardData={dataItem} key={index} index={index}></WeeklySliderCard>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default WeeklyTopSlider;
