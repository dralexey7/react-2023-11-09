import classNames from "classnames";
import { RestaurantTab } from "../restaurantTab/component";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantsIds } from "../../store/features/entities/restaurants/selectors";

export const RestaurantTabs = ({ onRestaurantSelect, className }) => {
  const restaurantIds = useSelector((state)=>selectRestaurantsIds(state));

  return (
    <div className={classNames(styles.container, className)}>
      {restaurantIds.map((restaurantId) => (
        <RestaurantTab id={restaurantId} onClick={() => onRestaurantSelect(restaurantId)} />
      ))}
      <RestaurantTab
        onClick={() => onRestaurantSelect(null)}
        isClear={true}
      />
    </div>
  );
};
