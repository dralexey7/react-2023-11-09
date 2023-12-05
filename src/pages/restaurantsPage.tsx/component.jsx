import { useState } from "react";
import { RestaurantTabs } from "../../components/restaurantTabs/component";
import { Restaurant } from "../../components/restaurant/component";
import { Layout } from "../../components/layout/component";
import styles from "./styles.module.css";

export const RestaurantsPage = ({ restaurants }) => {
  const [selectedRestaurantName, setSelectedRestaurantName] = useState();
  const restaurantNames = restaurants.map(({ name }) => name);

  const selectedRestaurant = restaurants.find(
    ({ name }) => name === selectedRestaurantName
  );

  if (!restaurants.length) {
    return null;
  }
  console.log(styles);
  return (
    <Layout>
      <div className={styles.mainContainer}>
        <RestaurantTabs
          restaurantNames={restaurantNames}
          onRestaurantSelect={(restaurant) =>
            setSelectedRestaurantName(restaurant)
          }
        />
        {selectedRestaurant && (
          <Restaurant
            restaurantData={selectedRestaurant}
            className={styles.restaurantLocation}
          />
        )}
      </div>
    </Layout>
  );
};
