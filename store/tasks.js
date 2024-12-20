// store/counterSlice.js
import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    taskList: [],
  },
  reducers: {
    updateTaskList: (state, action) => {
      state.taskList = action.payload; // Set user details
    },
  },
});

export const { updateTaskList } = tasksSlice.actions;
export default tasksSlice.reducer;
