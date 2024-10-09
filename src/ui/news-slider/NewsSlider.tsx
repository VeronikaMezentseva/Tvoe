import React, { FC } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NewsSliderCard } from "../news-slider-card/NewsSliderCard";
import { newsData } from "@/fake-data/news-data/news-data";
import styles from "./news-slider.module.scss";

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

const MultipleItems: FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 7,
    slidesToScroll: 1,
    nextArrow: <NextArrow></NextArrow>,
    prevArrow: <PrevArrow></PrevArrow>,
  };
  return (
    <div className={styles["slider-container"]}>
      <div className="slider-container">
        <Slider {...settings}>
          {newsData.map((dataItem, index) => {
            return (
              <NewsSliderCard newsData={dataItem} key={index}></NewsSliderCard>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default MultipleItems;
