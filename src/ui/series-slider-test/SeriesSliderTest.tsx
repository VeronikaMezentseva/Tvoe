import React, { Component, FC, useState } from "react";
import Slider from "react-slick";
import styles from "./series-slider-test.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  TInfoSeriesFakeData,
  infoSeriesFakeData,
} from "@/fake-data/info-series/info-series";
import { SeriesSliderCard } from "../series-slider-card/SeriesSliderCard";

const FocusOnSelect: FC<{onClick: (evt: any, someData: TInfoSeriesFakeData) => void }> = ({onClick}) => {
  const settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    speed: 300,
    arrows: false,
    initialSlide: 0,
    adaptiveHeight: true,
    responsive: [{
      breakpoint: 1800,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        // centerMode: true,
        // centerPadding: '20%'
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true
      }
    }
  ]
  };

  return (
    <div className={styles["slider-container"]}>
      <div className="slider-container">
        <Slider {...settings} className={styles.slider}>
          {infoSeriesFakeData.map((data, index) => {
            return (
              <SeriesSliderCard
                onClick={(evt) => onClick(evt, data)}
                key={index}
                fakeData={data}
              ></SeriesSliderCard>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default FocusOnSelect;
