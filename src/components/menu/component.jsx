import classNames from "classnames";
import { Dish } from "../dish/component";
import styles from "./styles.module.css";

export const Menu = ({ dishes, className }) => {
  
  return (
    <div className={classNames(className)}>
      <p>Menu</p>
      <ul>
        {dishes.map((dishId) => (
          <li className={styles.menuElement}>
            <Dish id={dishId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
