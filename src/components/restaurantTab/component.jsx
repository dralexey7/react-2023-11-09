import classNames from "classnames";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/features/entities/restaurants/selectors";

export const RestaurantTab = ({ id, onClick, className, isClear }) => {
  const name = useSelector((state) => selectRestaurantById(state, id)?.name);

  return (
    <button
      onClick={onClick}
      className={classNames(
        styles.buttonDefault,
        !isClear ? styles.buttonMain : styles.buttonClear,
        className
      )}
    >
      {isClear ? "Clear" : name}
    </button>
  );
};
