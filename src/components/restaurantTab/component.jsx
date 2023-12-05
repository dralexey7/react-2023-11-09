import classNames from "classnames";
import styles from "./styles.module.css";

export const RestaurantTab = ({ name, onClick, className, isClear }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        styles.buttonDefault,
        !isClear ? styles.buttonMain : styles.buttonClear,
        className
      )}
    >
      {name}
    </button>
  );
};
