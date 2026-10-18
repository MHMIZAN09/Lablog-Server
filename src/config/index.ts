import dotenv from "dotenv";
import path from "node:path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const config = {
  databaseUrl: process.env.DATABASE_URL,
  port: process.env.PORT,
  nodeEnv: process.env.NODE_ENV,
  frontendUrl: process.env.FRONTEND_URL,
  backendUrl: process.env.BACKEND_URL,
  jwtAccessTokenSecret: process.env.JWT_ACCESS_TOKEN_SECRET!,
  jwtRefreshTokenSecret: process.env.JWT_REFRESH_TOKEN_SECRET!,
  jwtAccessTokenExpiration: process.env.JWT_ACCESS_TOKEN_EXPIRATION!,
  jwtRefreshTokenExpiration: process.env.JWT_REFRESH_TOKEN_EXPIRATION!,
};
