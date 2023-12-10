import classNames from "classnames";
import { RestaurantTab } from "../restaurantTab/component";
import styles from "./styles.module.css";

export const RestaurantTabs = ({
  restaurantNames,
  onRestaurantSelect,
  className,
}) => {
  return (
    <div className={classNames(styles.container, className)}>
      {restaurantNames.map((name) => (
        <RestaurantTab name={name} onClick={() => onRestaurantSelect(name)} />
      ))}
      <RestaurantTab name={"Clear"} onClick={() => onRestaurantSelect(null)} isClear={true}/>
    </div>
  );
};
