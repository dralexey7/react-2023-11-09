export const selectRestaurantsModule = (state) => state.restaurants;

export const selectRestaurantsIds = (state) =>
  selectRestaurantsModule(state).ids;
export const selectRestaurantById = (state, id) =>
  selectRestaurantsModule(state).entities[id];
