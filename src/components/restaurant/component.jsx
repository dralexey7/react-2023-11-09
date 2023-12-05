import classNames from "classnames";
import { Menu } from "../menu/component";
import { ReviewForm } from "../reviewForm/component";
import { Reviews } from "../reviews/component";
import styles from "./styles.module.css";

export const Restaurant = ({ restaurantData, className }) => {
  const dishes = restaurantData.menu;
  const reviews = restaurantData.reviews;
  return (
    <div className={classNames(styles.container, className)}>
      <h3 className={styles.restaurantHeader}>{restaurantData.name}</h3>
      <Menu dishes={dishes} className={styles.menu}/>
      <Reviews reviews={reviews} className={styles.reviews}/>
      <ReviewForm />
    </div>
  );
};
