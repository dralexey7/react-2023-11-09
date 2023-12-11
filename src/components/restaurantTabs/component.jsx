import classNames from "classnames";
import { RestaurantTab } from "../restaurantTab/component";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../store/features/entities/restaurants/selectors";
import { useEffect } from "react";
import { getRestaurants } from "../../store/features/entities/restaurants/thunks/getRestaurants";

export const RestaurantTabs = ({ onRestaurantSelect, className }) => {
  const restaurantIds = useSelector((state) => selectRestaurantsIds(state));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurants());
  }, []);

  return (
    <div className={classNames(styles.container, className)}>
      {restaurantIds.map((restaurantId) => (
        <RestaurantTab
          id={restaurantId}
          onClick={() => onRestaurantSelect(restaurantId)}
        />
      ))}
      <RestaurantTab onClick={() => onRestaurantSelect(null)} isClear={true} />
    </div>
  );
};
