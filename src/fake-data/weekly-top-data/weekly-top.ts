import disasterImage from "../../images/weekly-top-posters/disaster.png";
import starTrackImage from "../../images/weekly-top-posters/startrack.jpeg";
import johnImage from "../../images/weekly-top-posters/john4.jpeg";
import castleImage from "../../images/weekly-top-posters/castle.jpeg";
import redImage from "../../images/weekly-top-posters/red.jpeg";
import paperImage from "../../images/weekly-top-posters/paperHome.jpeg";
import witcherImage from "../../images/weekly-top-posters/witcher.jpeg";
import marsImage from "../../images/weekly-top-posters/mars.jpeg";
import onesdayImage from "../../images/weekly-top-posters/onesday.jpeg";
import { StaticImageData } from "next/image";

export type TWeeklyTopData = {
  poster: StaticImageData;
}

export const weeklyTop: TWeeklyTopData[] = [
  {
    poster: disasterImage
  },
  {
    poster: starTrackImage
  },
  {
    poster: johnImage
  },
  {
    poster: castleImage
  },
  {
    poster: redImage
  },
  {
    poster: paperImage
  },
  {
    poster: witcherImage
  },
  {
    poster: marsImage
  },
  {
    poster: onesdayImage
  },
];