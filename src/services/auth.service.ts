import { getApi } from "./axiosClient";
import type { LoginPayload, LoginResponse } from "../types/auth.type";

export const authService = {
  async login(payload: LoginPayload): Promise<LoginResponse> {
    const response = await getApi().post<LoginResponse>("/auth/login", payload);

    return response.data;
  },
};
