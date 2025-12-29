import { loginSchema, registerSchema } from "./auth.schema";

export const validations = {
  login: loginSchema,
  register: registerSchema,
};
