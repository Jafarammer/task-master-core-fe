import { loginSchema, registerSchema } from "./auth.schema";
import { taskSchema } from "./task.schema";

export const validations = {
  login: loginSchema,
  register: registerSchema,
  task: taskSchema,
};
