import { FC } from "react";
import styles from "./mobile-navigation.module.scss";
import homeIcon from "../../images/homeIcon.png";
import filmIcon from "../../images/filmIcon.png";
import seriesIcon from "../../images/seriesIcon.png";
import tvIcon from "../../images/tvIcon.png";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const MobileNavigation: FC = () => {
  const pathname = usePathname();

  return (
    <nav className={styles["navigation"]}>
      <ul className={styles["navigation-list"]}>
        <li className={styles["navigation-item"]}>
          <img className={styles["icon"]} src={homeIcon.src} alt="" />
          <Link href={"/"} className={`${pathname === '/' ? `${styles["menu__active-link"]} ${styles["paragraph"]}` : styles["paragraph"]}`}>Главная</Link>
        </li>
        <li className={styles["navigation-item"]}>
          <img className={styles["icon"]} src={filmIcon.src} alt="" />
          <Link href={"/films"} className={`${pathname === '/films' ? `${styles["menu__active-link"]} ${styles["paragraph"]}` : styles["paragraph"]}`}>Фильмы</Link>
        </li>
        <li className={styles["navigation-item"]}>
          <img className={styles["icon"]} src={seriesIcon.src} alt="" />
          <Link href={"*"} className={`${pathname === '/series' ? `${styles["menu__active-link"]} ${styles["paragraph"]}` : styles["paragraph"]}`}>Сериалы</Link>
        </li>
        <li className={styles["navigation-item"]}>
          <img className={styles["icon"]} src={tvIcon.src} alt="" />
          <Link href={"*"} className={`${pathname === '/tv' ? `${styles["menu__active-link"]} ${styles["paragraph"]}` : styles["paragraph"]}`}>ТВ</Link>
        </li>
      </ul>
    </nav>
  );
}