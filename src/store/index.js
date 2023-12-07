import { configureStore } from "@reduxjs/toolkit";
import { dishesSlice } from "./features/entities/dishes";
import { restaurantsSlice } from "./features/entities/restaurants";
import { reviewsSlice } from "./features/entities/reviews";
import { usersSlice } from "./features/entities/users";

const store = configureStore({
  reducer: {
    restaurants: restaurantsSlice.reducer,
    dishes: dishesSlice.reducer,
    reviews: reviewsSlice.reducer,
    users: usersSlice.reducer,
  },
});

export default store;
