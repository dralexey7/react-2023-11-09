import { Menu } from "../menu/component";
import { Reviews } from "../reviews/component";

export const Restaurant = ({ restaurantData }) => {
  const dishes = restaurantData.menu;
  const reviews = restaurantData.reviews;
  return (
    <div>
      <h3>{restaurantData.name}</h3>
      <Menu dishes={dishes} />
      <Reviews reviews={reviews} />
    </div>
  );
};
