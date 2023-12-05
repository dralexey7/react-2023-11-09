import classNames from "classnames";
import { Dish } from "../dish/component";
import styles from "./styles.module.css";

export const Menu = ({ dishes, className }) => {
  const names = dishes.map(({ name }) => name);
  return (
    <div className={classNames(className)}>
      <p>Menu</p>
      <ul>
        {names.map((name) => (
          <li className={styles.menuElement}>
            <Dish name={name} />
          </li>
        ))}
      </ul>
    </div>
  );
};
