import { FC } from "react";
import styles from "./footer.module.scss";
import { Button } from "@/app/components/button/Buttons";
import tgIcon from "../../images/telegramIcon.png";
import vkIcon from "../../images/vkIcon.png";
import youTubeIcon from "../../images/youTubeIcon.png";
import tiktokIcon from "../../images/tiktokIcon.png";
import logo from "../../images/Logo.png";

export const Footer: FC = () => {
  return (
    <footer className={styles["footer"]}>
      <div className={styles["social-links"]}>
        <Button text={"Написать в поддержку"} accent={false}></Button>
        <div className={styles["buttons-container"]}>
          <button className={styles["button"]}>
            <p>Telegram</p>
            <img src={tgIcon.src} alt="" />
          </button>
          <button className={styles["button"]}>
            <p>ВКонтакте</p>
            <img src={vkIcon.src} alt="" />
          </button>
          <button className={styles["button"]}>
            <p>Youtube</p>
            <img src={youTubeIcon.src} alt="" />
          </button>
          <button className={styles["button"]}>
            <p>TikTok</p>
            <img src={tiktokIcon.src} alt="" />
          </button>
        </div>
      </div>
      <div className={styles["navigation-block"]}>
        <ul className={styles["navigation-list"]}>
          <li>Главная</li>
          <li>Фильмы</li>
          <li>Сериалы</li>
          <li>ТВ</li>
          <li>Контакты</li>
        </ul>
        <ul className={styles["navigation-tech-list"]}>
          <li>Реферальная программа</li>
          <li>Скачать приложение</li>
          <li>Вопросы и ответы</li>
          <li>Условия использования</li>
        </ul>
      </div>
      <div className={styles["company-info-block"]}>
        <div className={styles["company-info-rights"]}>
          <div className={styles["age-rate-label"]}>18+</div>
          <div className={styles["company-info-paragraphs"]}>
            <p>2024, ООО «ТВОЁ ЛАЙВ»</p>
            <p>Все права защищены.</p>
          </div>
        </div>
          <img className={styles["logo"]} src={logo.src} alt="" />
      </div>
    </footer>
  );
};
