import { useState } from "react";
import { RestaurantTabs } from "../../components/restaurantTabs/component";
import { Restaurant } from "../../components/restaurant/component";
import { Layout } from "../../components/layout/component";
import styles from "./styles.module.css";

export const RestaurantsPage = ({ restaurants }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState();

  if (!restaurants.length) {
    return null;
  }

  return (
    <Layout>
      <div className={styles.mainContainer}>
        <RestaurantTabs
          onRestaurantSelect={setSelectedRestaurant}
        />
        {selectedRestaurant && (
          <Restaurant
            restaurantId={selectedRestaurant}
            className={styles.restaurantLocation}
          />
        )}
      </div>
    </Layout>
  );
};
