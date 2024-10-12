'use client';

import { FC, useEffect, useState } from "react";
import styles from "./footer.module.scss";
import tgIcon from "../../images/telegramIcon.png";
import vkIcon from "../../images/vkIcon.png";
import youTubeIcon from "../../images/youTubeIcon.png";
import tiktokIcon from "../../images/tiktokIcon.png";
import logo from "../../images/Logo.png";
import { Button } from "../button/Button";
import { ButtonIconUI } from "../button-icon/ButtonIcon";
import { useWindowSize } from "@/utils/hooks/useWindowSize";
import { MobileNavigation } from "../mobile-navigation/MobileNavigation";

export const Footer: FC = () => {
  const windowWidth = useWindowSize().width;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(windowWidth > 1220 ? false : true);
  }, [windowWidth]);

  return (
    <footer className={styles["footer"]}>
      <div className={styles["social-links"]}>
        <Button text={"Написать в поддержку"} accent={false} extraClasses="button-centered-text"></Button>
        <div className={styles["buttons-container"]}>
          <button className={styles["button"]}>
            <p className={styles["social-paragraph"]}>Telegram</p>
            <div className={styles["social-icon-container"]}>
              <img className={styles["social-icon"]} src={tgIcon.src} alt="" />
            </div>
          </button>
          <button className={styles["button"]}>
            <p className={styles["social-paragraph"]}>ВКонтакте</p>
            <div className={styles["social-icon-container"]}>
              <img className={styles["social-icon"]} src={vkIcon.src} alt="" />
            </div>
          </button>
          <button className={styles["button"]}>
            <p className={styles["social-paragraph"]}>Youtube</p>
            <div className={styles["social-icon-container"]}>
              <img className={styles["social-icon"]} src={youTubeIcon.src} alt="" />
            </div>
          </button>
          <button className={styles["button"]}>
            <p className={styles["social-paragraph"]}>TikTok</p>
            <div className={styles["social-icon-container"]}>
              <img className={styles["social-icon"]} src={tiktokIcon.src} alt="" />
            </div>
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
        <ButtonIconUI text={"Промокод"} accent={false} icon={"download"} extraClasses="button-footer"></ButtonIconUI>
        <ul className={styles["navigation-tech-list"]}>
          <li>Контакты</li>
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
      {isMobile ? <MobileNavigation></MobileNavigation> : <></>}
    </footer>
  );
};
