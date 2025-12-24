import { getApi } from "./axiosClient";
import {
  TMyTaskPayload,
  TMyTaskResponse,
  TMyTaskUpdateStatusPayload,
  TMyTaskDetailResponse,
} from "../types/myTask.type";

export const myTaskService = {
  async create(payload: TMyTaskPayload): Promise<TMyTaskResponse> {
    const response = await getApi().post<TMyTaskResponse>("/task", payload);
    return response.data;
  },
  async update(id: string, payload: TMyTaskPayload): Promise<TMyTaskResponse> {
    const response = await getApi().patch<TMyTaskResponse>(
      `/task/${id}`,
      payload
    );
    return response.data;
  },
  async updateStatus(
    id: string,
    payload: TMyTaskUpdateStatusPayload
  ): Promise<TMyTaskResponse> {
    const response = await getApi().patch<TMyTaskResponse>(
      `/task/status/${id}`,
      payload
    );
    return response.data;
  },
  async fetchDetail(id: string): Promise<TMyTaskDetailResponse> {
    const response = await getApi().get<TMyTaskDetailResponse>(
      `/task/detail/${id}`
    );
    return response.data;
  },
  async delete(id: string): Promise<TMyTaskResponse> {
    const response = await getApi().delete<TMyTaskResponse>(`/task/hard/${id}`);
    return response.data;
  },
};
