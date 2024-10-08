import { FC } from "react";
import styles from "../button/button.module.scss";

export const ButtonUI: FC<{
  text: string;
  accent: boolean;
}> = ({ text, accent }) => {
  let classNames = styles.button;
  accent
    ? (classNames += ` ${styles["button-primary"]}`)
    : (classNames += ` ${styles["button-secondary"]}`);


  return <button className={classNames}>{text}</button>;
};
