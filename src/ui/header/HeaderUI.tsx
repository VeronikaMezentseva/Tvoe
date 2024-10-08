"use client"

import { Button } from "@/app/components/button/Buttons";
import LogoIMG from "../../images/Logo.png";
import downloadIcon from "../../images/download.png";
import { ButtonIconUI } from "../button-icon/ButtonIcon";
import { ButtonUI } from "../button/Button";
import searchImg from "../../images/search.png";
import styles from "../header/header.module.scss";
import Link from "next/link";
import { FC } from "react";
import { usePathname } from "next/navigation";

export const HeaderUI: FC = () => {
  const pathname = usePathname();
  
  return (
    <header className={styles.header}>
      <nav className={styles.navigation}>
        <div>
          <img src={LogoIMG.src} alt="Логотип" />
        </div>
        <ul className={styles.menu}>
          <li className={`${pathname === '/' ? styles["menu__active-link"] : ''}`}>
            <Link href={"/"}>Главная</Link>
          </li>
          <li className={`${pathname === '/films' ? styles["menu__active-link"] : ''}`}>
            <Link href={'/films'}>Фильмы</Link>
          </li>
          <li className={`${pathname === '/series' ? styles["menu__active-link"] : ''}`}>
            <Link href={'*'}>Сериалы</Link>
          </li>
          <li className={`${pathname === '/tv' ? styles["menu__active-link"] : ''}`}>
            <Link href={'*'}>ТВ</Link>
          </li>
        </ul>
      </nav>
      <div className={styles["buttons-container"]}>
        <ButtonIconUI text={"Установить"} accent={false} icon={"download"} />
        <Button text="7 дней за 0 ₽" accent={true} />
        <ButtonIconUI text={"Промокод"} accent={false} icon={"promo"} />
        <div className={styles['buttons-container__buttons-search']}>
          <img src={searchImg.src} alt="Иконка поиска" />
        </div>
        <div className={styles['buttons-container__buttons-download']}>
          <img src={downloadIcon.src} alt="Иконка установки" />
        </div>
        <button className={styles.login}>Войти</button>
      </div>
    </header>
  );
};
