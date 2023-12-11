export const selectUsersModule = (state) => state.users;

export const selectUsersIds = (state) =>
  selectUsersModule(state).ids;