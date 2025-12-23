import { getApi } from "./axiosClient";
import type {
  LoginPayload,
  LoginResponse,
  RegisterPayload,
  RegisterResponse,
} from "../types/auth.type";

export const authService = {
  async login(payload: LoginPayload): Promise<LoginResponse> {
    const response = await getApi().post<LoginResponse>("/auth/login", payload);

    return response.data;
  },
  async register(payload: RegisterPayload): Promise<RegisterResponse> {
    const response = await getApi().post<RegisterResponse>(
      "/auth/register",
      payload
    );
    return response.data;
  },
};
