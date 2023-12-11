import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "../../restaurants/selectors";
import { selectDishById } from "../selectors";

export const getDishByRestaurantId = createAsyncThunk(
  "dishes/getDishByRestaurantId",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/dishes?restaurantId=${restaurantId}`
    );
    const result = await response.json();

    if (!result?.length) {
      return rejectWithValue(`Empty dishes for restaurant ${restaurantId}`);
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      return selectRestaurantById(getState(), restaurantId).menu.reduce(
        (acc, dishId) => !selectDishById(getState(), dishId) || acc,
        false
      );
    },
  }
);
