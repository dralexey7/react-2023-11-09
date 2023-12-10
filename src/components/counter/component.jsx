import classNames from "classnames";
import styles from "./styles.module.css";
import { Button } from "../button/component";

export const Counter = ({ value, increment, decrement, min = 0, max = 5, className }) => {
  return (
    <div className={classNames(styles.container, className)}>
      <Button className={styles.button} onClick={increment} disabled={value >= max}>
        +
      </Button>
      <p>{value}</p>
      <Button className={styles.button} onClick={decrement} disabled={value <= min}>
        -
      </Button>
    </div>
  );
};
