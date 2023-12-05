import classNames from "classnames";
import styles from "./styles.module.css";

export const Counter = ({ value, increment, decrement, min = 0, max = 5, className }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <button className={styles.button} onClick={increment} disabled={value >= max}>
        +
      </button>
      <p>{value}</p>
      <button className={styles.button} onClick={decrement} disabled={value <= min}>
        -
      </button>
    </div>
  );
};
