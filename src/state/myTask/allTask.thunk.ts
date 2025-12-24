import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApi } from "../../services";
import { TMyTaskParams, TMyTaskResponse } from "../../types/myTask.type";

export const fetchAllTask = createAsyncThunk<
  TMyTaskResponse,
  TMyTaskParams | undefined,
  { rejectValue: string }
>("allTask/fetch", async (params, { rejectWithValue }) => {
  try {
    const {
      page = 1,
      limit = 1,
      sort_by = "createdAt",
      order = "desc",
      search = "",
    } = params || {};

    const response = await getApi().get("/task", {
      params: { page, limit, sort_by, order, search },
    });
    return response.data as TMyTaskResponse;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || "Failed to fetch tasks"
    );
  }
});
