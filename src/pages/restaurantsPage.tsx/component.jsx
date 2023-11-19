import { RestaurantNames } from "../../components/restaurantNames/component";
import { Restaurants } from "../../components/restaurants/component";

export const RestaurantsPage = ({ restaurants }) => {
  const restaurantNames = restaurants.map(({ name }) => name);
  console.log(restaurantNames)
  return (
    <div>
      <RestaurantNames restaurantNames={restaurantNames}/>
      <Restaurants restaurants={restaurants}/>
    </div>
  );
};
