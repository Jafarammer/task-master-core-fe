import { createSlice } from "@reduxjs/toolkit";
import { fetchPendingTask } from "./pendingTask.thunk";
import { TMyTaskResponse } from "../../types/myTask.type";

type TPendingTaskState = {
  items: TMyTaskResponse["data"];
  meta_data: TMyTaskResponse["meta_data"];
  loading: boolean;
  error: string | null;
};

const initialState: TPendingTaskState = {
  items: [],
  meta_data: {
    page: 1,
    limit: 5,
    total: 0,
    total_pages: 0,
  },
  loading: false,
  error: null,
};

const pendingTaskSlice = createSlice({
  name: "pendingTask",
  initialState,
  reducers: {
    logoutPendingTask: (state) => {
      state.items = [];
      state.meta_data = {
        page: 1,
        limit: 5,
        total: 0,
        total_pages: 0,
      };
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPendingTask.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPendingTask.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.data;
        state.meta_data = action.payload.meta_data;
        state.error = null;
      })
      .addCase(fetchPendingTask.rejected, (state, action) => {
        state.loading = false;
        state.items = [];
        state.error = action.error.message || "Failed to load data!";
      });
  },
});

export const { logoutPendingTask } = pendingTaskSlice.actions;
export const pendingTaskReducer = pendingTaskSlice.reducer;
