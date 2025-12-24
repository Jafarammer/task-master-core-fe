export type TMyTaskData = {
  _id: string;
  user_id: string;
  title: string;
  description: string;
  due_date: string;
  priority: "low" | "medium" | "high";
  is_completed: boolean;
  deleted_at: string | null;
  createdAt: string;
  updatedAt: string;
};

export type TMyTaskParams = {
  page?: number;
  limit?: number;
  sort_by?: string;
  order?: "asc" | "desc";
  search?: string;
};

export type TMyTaskResponseData = {
  data: TMyTaskData[];
  meta_data: {
    page: number;
    limit: number;
    total: number;
    total_pages: number;
  };
};

export type TMyTaskPayload = {
  title: string;
  description: string;
  due_date: string;
  priority: string;
  is_completed?: boolean;
};

export type TMyTaskUpdateStatusPayload = {
  is_completed: boolean;
};

export type TMyTaskResponse = {
  message: string;
};

export type TMyTaskDetailResponse = {
  data: TMyTaskPayload;
};
