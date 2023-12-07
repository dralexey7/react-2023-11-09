import { Provider } from "react-redux";
import { RestaurantsPage } from "./pages/restaurantsPage.tsx/component";
import "./styles/index.css";
import store from "./store";

export const App = ({ restaurants }) => {
  return (
    <Provider store={store}>
      <RestaurantsPage restaurants={restaurants} />;
    </Provider>
  );
};
