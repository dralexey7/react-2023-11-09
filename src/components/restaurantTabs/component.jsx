import { RestaurantTab } from "../restaurantTab/component";

export const RestaurantTabs = ({ restaurantNames, onRestaurantSelect }) => {
  return (
    <div>
      {restaurantNames.map((name) => (
        <RestaurantTab name={name} onClick={() => onRestaurantSelect(name)} />
      ))}
    </div>
  );
};
