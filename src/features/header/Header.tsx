import { Link } from "react-router-dom";

import logo from "../../logo.svg";
import styles from "./Header.module.css";

const LOGO_TEXT = "Logo";

export const Header = () => (
  <header className={styles.listHeader}>
    <Link className={`${styles.link} ${styles.link}`} to={`/places`}>
      <img
        src={logo}
        className={styles.logo}
        alt="logo"
        width={64}
        height={64}
      />
      {LOGO_TEXT}
    </Link>
  </header>
);
