import { FC } from "react";
import styles from "../button/button.module.scss";

export const Button: FC<{
  text: string;
  accent: boolean;
  extraClasses?: string;
}> = ({ text, accent, extraClasses }) => {
  let classNames = `${styles["button"]} ${styles[`${extraClasses}`]}`;
  accent
    ? (classNames += ` ${styles["button-primary"]}`)
    : (classNames += ` ${styles["button-secondary"]}`);


  return <button className={classNames}>{text}</button>;
};
