import classNames from "classnames";
import styles from "./styles.module.css";

export const Review = ({ text, className }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <p className={styles.text}>{text}</p>
    </div>
  );
};
