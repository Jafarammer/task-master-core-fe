import { createAsyncThunk } from "@reduxjs/toolkit";
import { getApi } from "../../services";
import { TprofileResponse } from "../../types/profile.type";

export const fetchProfile = createAsyncThunk<
  TprofileResponse,
  void,
  { rejectValue: string }
>("profile/fetch", async (_, { rejectWithValue }) => {
  try {
    const response = await getApi().get("/users/profile");
    return response.data as TprofileResponse;
  } catch (error: any) {
    return rejectWithValue(
      error.response?.data?.message || "Failed to fetch profile"
    );
  }
});
