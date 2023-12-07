import classNames from "classnames";
import { Menu } from "../menu/component";
import { ReviewForm } from "../reviewForm/component";
import { Reviews } from "../reviews/component";
import styles from "./styles.module.css";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../store/features/entities/restaurants/selectors";

export const Restaurant = ({ restaurantId, className }) => {
  const { menu, reviews, name } = useSelector((state) =>
    selectRestaurantById(state, restaurantId)
  );
  
  return (
    <div className={classNames(styles.container, className)}>
      <h3 className={styles.restaurantHeader}>{name}</h3>
      <Menu dishes={menu} className={styles.menu} />
      <Reviews reviews={reviews} className={styles.reviews} />
      <ReviewForm />
    </div>
  );
};
