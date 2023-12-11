import { useState, useEffect } from "react";
import { RestaurantTabs } from "../../components/restaurantTabs/component";
import { Restaurant } from "../../components/restaurant/component";
import { Layout } from "../../components/layout/component";
import styles from "./styles.module.css";
import { useDispatch } from "react-redux";
import { getUsers } from "../../store/features/entities/users/thunks/getUsers";

export const RestaurantsPage = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <Layout>
      <div className={styles.mainContainer}>
        <RestaurantTabs onRestaurantSelect={setSelectedRestaurant} />
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
