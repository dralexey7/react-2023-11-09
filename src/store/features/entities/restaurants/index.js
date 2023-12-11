import { createSlice } from "@reduxjs/toolkit";
import { normalizedRestaurants } from "../../../../constants/normalized-mock";
import { getRestaurants } from "./thunks/getRestaurants";
import { REQUEST_STATUSES } from "../../../../constants/requestStatuses";

export const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: {
    entities: {},
    ids: [],
    status: REQUEST_STATUSES.idle,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getRestaurants.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getRestaurants.fulfilled, (state, {payload}) => {
        state.entities = payload.reduce((acc, restaurant) => {
          acc[restaurant.id] = restaurant;
          return acc;
        }, {});
        state.ids = payload.map(({ id }) => id);
        state.status = REQUEST_STATUSES.fulfilled;
      })
      .addCase(getRestaurants.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      }),
});
