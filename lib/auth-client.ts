import { createAuthClient } from "better-auth/react";
import { config } from "dotenv";

config({ path: ".env" });

export const authClient = createAuthClient({
  baseURL: process.env.APP_URL!,
});