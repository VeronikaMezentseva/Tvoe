import { FC, ReactNode } from "react";
import styles from "./main-section.module.scss";

export const MainSection: FC<{children: ReactNode}> = ({children}) => {
  return (
    <main className={styles["main-section"]}>
      {children}
    </main>
  );
}