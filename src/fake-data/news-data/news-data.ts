import { StaticImageData } from "next/image";
import lionKing from "../../images/lionKing.png";
import amphibia from "../../images/amphibia.png";
import skull from "../../images/skull.png";
import joker from "../../images/joker.png";
import girl from "../../images/girl.png";
import hollow from "../../images/hollow.png";
import despicableMe from "../../images/despicableMe.png";

export type TNewsData = {
  rate: string;
  image: StaticImageData;
  name: string;
  year: string;
  duration: string;
  isNewSeason?: boolean;
};

export const newsData: TNewsData[] = [
  {
    rate: "9,9",
    image: lionKing,
    name: "Муфаса: Король Лев",
    year: "2024",
    duration: "2 ч 32 мин"
  },
  {
    rate: "9,9",
    image: amphibia,
    name: "Амфибия",
    year: "2024",
    duration: "2 ч 32 мин"
  },
  {
    rate: "9,9",
    image: skull,
    name: "Слишком стар, чтобы умереть молодым",
    year: "2024",
    duration: "2 сезона",
    isNewSeason: true
  },
  {
    rate: "9,9",
    image: joker,
    name: "Джокер: Безумие на двоих",
    year: "2024",
    duration: "1 ч 56 мин"
  },
  {
    rate: "5,4",
    image: girl,
    name: "Хороших девочек не убивают",
    year: "2024",
    duration: "5 сезонов",
    isNewSeason: true
  },
  {
    rate: "9,9",
    image: hollow,
    name: "Лощина",
    year: "2024",
    duration: "2 ч 42 мин"
  },
  {
    rate: "9,9",
    image: despicableMe,
    name: "Гадкий я 4",
    year: "2024",
    duration: "1 ч 48 мин"
  }
];
