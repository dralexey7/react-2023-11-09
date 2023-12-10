import { useState } from "react";
import { Counter } from "../counter/component";
import styles from "./styles.module.css";
import classNames from "classnames";

export const Dish = ({ name, className }) => {
  const [amount, setAmount] = useState(0);
  return (
    <div className={classNames(styles.container, className)}>
      <p>{name}</p>
      <Counter
        value={amount}
        increment={() => {
          setAmount((current) => current + 1);
        }}
        decrement={() => {
          setAmount((current) => current - 1);
        }}
      />
    </div>
  );
};
