import { RestaurantName } from "../restaurantName/component";

export const RestaurantNames = ({ restaurantNames }) => {
  return (
    <div>
      {restaurantNames.map((name) => (
        <RestaurantName name={name} />
      ))}
    </div>
  );
};
