import { RestaurantsPage } from "./pages/restaurantsPage.tsx/component";
import './styles/index.css'

export const App = ({ restaurants }) => {
  return <RestaurantsPage restaurants={restaurants} />;
};
