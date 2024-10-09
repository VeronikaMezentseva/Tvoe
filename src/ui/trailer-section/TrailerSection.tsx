'use client'

import { FC, useState } from "react";
import { SerialInfo } from "../serial-info/SerialInfo";
import { TInfoSeriesFakeData, infoSeriesFakeData } from "@/fake-data/info-series/info-series";
import FocusOnSelect from "../series-slider-test/SeriesSliderTest";
import React from "react";
import { SeriesSection } from "../series-section/SeriesSection";

export const TrailerSection: FC = () => {
  const [activeSlide, setActiveSlide] = useState(infoSeriesFakeData[0]);

  const changeActiveSlide = (evt: any, someData: TInfoSeriesFakeData) => {
    evt.preventDefault();
    setActiveSlide(someData);
  }


  return (
    <SeriesSection activeSlide={activeSlide}>
      <SerialInfo data={activeSlide}></SerialInfo>
      <FocusOnSelect onClick={(evt: any, someData: TInfoSeriesFakeData) => changeActiveSlide(evt, someData)}></FocusOnSelect>
    </SeriesSection>
  );
}