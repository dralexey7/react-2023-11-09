import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUsersIds } from "../selectors";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3001/api/users/");
    const result = await response.json();

    if (!result?.length) {
      return rejectWithValue("Empty users");
    }

    return result;
  },
  {
    condition: (_, {getState}) => !selectUsersIds(getState()).length
  }
);
