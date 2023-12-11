import { createSlice } from "@reduxjs/toolkit";
import { normalizedUsers } from "../../../../constants/normalized-mock";
import { REQUEST_STATUSES } from "../../../../constants/requestStatuses";
import { getUsers } from "./thunks/getUsers";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    entities: {},
    ids: [],
    status: REQUEST_STATUSES.idle,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getUsers.pending, (state) => {
        state.status = REQUEST_STATUSES.pending;
      })
      .addCase(getUsers.fulfilled, (state, { payload }) => {
        (state.entities = payload.reduce((acc, user) => {
          acc[user.id] = user;
          return acc;
        }, {})),
          (state.ids = payload.map(({ id }) => id));
        state.status = REQUEST_STATUSES.fulfilled;
      })
      .addCase(getUsers.rejected, (state) => {
        state.status = REQUEST_STATUSES.rejected;
      }),
});
