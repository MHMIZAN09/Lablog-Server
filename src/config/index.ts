import dotenv from "dotenv";
import path from "node:path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const config = {
  databaseUrl: process.env.DATABASE_URL,
  port: process.env.PORT,
  apiUrl: process.env.API_URL,
};
