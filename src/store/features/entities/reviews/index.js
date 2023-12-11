import { createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./thunks/getReviewsByRestaurantID";

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState: {
    entities: {},
    ids: [],
  },
  extraReducers: (builder) =>
  builder.addCase(getReviewsByRestaurantId.fulfilled, (state, { payload }) => {
    payload.forEach((item) => {
      state.entities[item.id] = item;
      if (!state.ids.includes(item.id)) {
        state.ids.push(item.id);
      }
    });
  }),
});
