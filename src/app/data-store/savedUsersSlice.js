import { createSlice } from "@reduxjs/toolkit";

const savedUsersSlice = createSlice({
  name: "user-detail",
  initialState: {
    users: [],
  },
  reducers: {
    // we are directly mutating the state here.
    addUser: (state, action) => {
      if (state.users.findIndex((user) => user.id === action.payload.id) === -1)
        state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users.splice(action.payload.index, 1);
    },
    removeAllUsers: (state) => {
      state.users = []; // Akshay says it won't work if we directly mutate the state, but it will work here.
      // This line is actually mutating the state, but because of how Redux Toolkit and Immer
      // mutate the state, it will create a new state
      // This is because Redux Toolkit uses Immer under the hood, which allows us to write "mutable" code that is actually producing immutable updates.
      // So, even though we are directly assigning an empty array to state.users, Immer will handle this correctly and produce a new state object with users set to an empty array.
      // This is a key feature of Redux Toolkit that simplifies state management.
    },
  },
});

export const { addUser, removeUser, removeAllUsers } = savedUsersSlice.actions;
export default savedUsersSlice.reducer;
