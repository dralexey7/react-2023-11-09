import { createSlice } from "@reduxjs/toolkit";
import { getDishByRestaurantId } from "./thunks/getDishByRestaurantId";

export const dishesSlice = createSlice({
  name: "dishes",
  initialState: {
    entities: {},
    ids: [],
  },
  extraReducers: (builder) =>
    builder.addCase(getDishByRestaurantId.fulfilled, (state, { payload }) => {
      payload.forEach((item) => {
        state.entities[item.id] = item;
        if (!state.ids.includes(item.id)) {
          state.ids.push(item.id);
        }
      });
    }),
});
