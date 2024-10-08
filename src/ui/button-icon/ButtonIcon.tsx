import { FC } from "react";
import styles from "../button-icon/button-icon.module.scss";
import downloadIcon from "../../images/download.png";
import promoIcon from "../../images/promo.png";

export const ButtonIconUI: FC<{
  text: string;
  accent: boolean;
  icon: 'download' | 'promo';
}> = ({ text, accent, icon }) => {
  let classNames = styles.button;
  let iconSrc;

  accent
    ? (classNames += ` ${styles["button-primary"]}`)
    : (classNames += ` ${styles["button-secondary"]}`);

  icon === 'download'
    ? iconSrc = downloadIcon.src
    : iconSrc = promoIcon.src;


  return (
    <div>
      <button className={classNames}>
        <img className={styles['button-icon']} src={iconSrc} alt="Иконка" />
        {text}
      </button>
    </div>
  );
};
