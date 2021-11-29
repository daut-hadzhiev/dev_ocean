import styles from "./Spinner.module.css";

export const Spinner = () => (
  <div className={styles.spinnerWrapper}>
    <span>Loading...</span>
    <div className={styles.spinner}></div>
  </div>
);
