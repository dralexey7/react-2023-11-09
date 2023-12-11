import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectRestaurantById } from "../../restaurants/selectors";
import { selectReviewById } from "../selectors";

export const getReviewsByRestaurantId = createAsyncThunk(
  "reviews/getReviewsByRestaurantId",
  async (restaurantId, { rejectWithValue }) => {
    const response = await fetch(
      `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
    );
    const result = await response.json();

    if (!result?.length) {
      return rejectWithValue(`Empty reviews for restaurant ${restaurantId}`);
    }

    return result;
  },
  {
    condition: (restaurantId, { getState }) => {
      return selectRestaurantById(getState(), restaurantId).reviews.reduce(
        (acc, reviewId) => !selectReviewById(getState(), reviewId) || acc,
        false
      );
    },
  }
);
