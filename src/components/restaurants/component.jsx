import { Restaurant } from "../restaurant/component";

export const Restaurants = ({ restaurants }) => {
  return (
    <ul>
      {restaurants.map((restaurantData) => (
        <li>
          <Restaurant restaurantData={restaurantData} />
        </li>
      ))}
    </ul>
  );
};
