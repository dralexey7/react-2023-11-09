import { useState } from "react";
import { RestaurantTabs } from "../../components/restaurantTabs/component";
import { Restaurant } from "../../components/restaurant/component";

export const RestaurantsPage = ({ restaurants }) => {
  const [selectedRestaurantName, setSelectedRestaurantName] = useState();
  const restaurantNames = restaurants.map(({ name }) => name);

  const selectedRestaurant = restaurants.find(
    ({ name }) => name === selectedRestaurantName
  );

  if (!restaurants.length) {
    return null;
  }

  return (
    <div>
      <RestaurantTabs
        restaurantNames={restaurantNames}
        onRestaurantSelect={(restaurant) =>
          setSelectedRestaurantName(restaurant)
        }
      />
      {selectedRestaurant && <Restaurant restaurantData={selectedRestaurant} />}
    </div>
  );
};
