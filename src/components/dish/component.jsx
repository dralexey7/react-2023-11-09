import { useState } from "react";
import { Counter } from "../counter/component";
import styles from "./styles.module.css";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectDishById } from "../../store/features/entities/dishes/selectors";

export const Dish = ({ id, className }) => {
  const [amount, setAmount] = useState(0);
  const name = useSelector((state)=>selectDishById(state, id))?.name

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
