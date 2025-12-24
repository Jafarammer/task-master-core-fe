import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApi } from "../../services";
import { TMyTaskParams, TMyTaskResponseData } from "../../types/myTask.type";

export const fetchPendingTask = createAsyncThunk<
  TMyTaskResponseData,
  TMyTaskParams | undefined,
  { rejectValue: string }
>("pendingTask/fetch", async (params, { rejectWithValue }) => {
  try {
    const {
      page = 1,
      limit = 5,
      sort_by = "createdAt",
      order = "desc",
      search = "",
    } = params || {};

    const response = await getApi().get("/task/pending", {
      params: { page, limit, sort_by, order, search },
    });

    return response.data as TMyTaskResponseData;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || "Failed to fetch tasks pending"
    );
  }
});
