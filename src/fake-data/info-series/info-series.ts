import { StaticImageData } from "next/image";
import avatarImage from "../../images/avatarLogo.png";
import avatarCover from "../../images/avatarCover.png";
import focusCover from "../../images/focusCover.jpeg";
import familyCover from "../../images/familyCover.jpeg";
import warCover from "../../images/warCover.jpeg";
import revengeCover from "../../images/revengeCover.png";
import whileSleepingCover from "../../images/whileSleepingCover.jpeg";
import JamesBrownCover from "../../images/JamesBrownCover.jpeg";

export type TInfoSeriesFakeData = {
  name: string;
  filmLogo?: StaticImageData;
  image: StaticImageData;
  rate: string;
  year: string;
  genre: string;
  country: string;
  ageRate: string;
  seasons: string;
};

export const infoSeriesFakeData: TInfoSeriesFakeData[] = [
  {
    name: "Avatar",
    filmLogo: avatarImage,
    image: avatarCover,
    rate: "7,9",
    year: "2024",
    genre: "Фентези",
    country: "США",
    ageRate: "16+",
    seasons: "1 сезон",
  },
  {
    name: "Фокус",
    image: focusCover,
    rate: "8,2",
    year: "2015",
    genre: "Боевик",
    country: "США",
    ageRate: "18+",
    seasons: "",
  },
  {
    name: "Семья по-быстрому",
    image: familyCover,
    rate: "6,5",
    year: "2018",
    genre: "Комедия",
    country: "США",
    ageRate: "16+",
    seasons: "",
  },
  {
    name: "Значит, война",
    image: warCover,
    rate: "7,1",
    year: "2012",
    genre: "Боевик",
    country: "США",
    ageRate: "18+",
    seasons: "",
  },
  {
    name: "Месть подружек невесты",
    image: revengeCover,
    rate: "3,8",
    year: "2010",
    genre: "Мелодрама",
    country: "США",
    ageRate: "16+",
    seasons: "",
  },
  {
    name: "Пока ты спал",
    image: whileSleepingCover,
    rate: "7,5",
    year: "1995",
    genre: "Драма",
    country: "США",
    ageRate: "12+",
    seasons: "",
  },
  {
    name: "Семья по-быстрому",
    image: familyCover,
    rate: "6,5",
    year: "2018",
    genre: "Комедия",
    country: "США",
    ageRate: "16+",
    seasons: "",
  },
  {
    name: "Джеймс Браун: Путь наверх",
    image: JamesBrownCover,
    rate: "7,0",
    year: "2014",
    genre: "Драма",
    country: "США",
    ageRate: "16+",
    seasons: "",
  },
  {
    name: "Avatar",
    filmLogo: avatarImage,
    image: avatarCover,
    rate: "7,9",
    year: "2024",
    genre: "Фентези",
    country: "США",
    ageRate: "16+",
    seasons: "1 сезон",
  }
];
