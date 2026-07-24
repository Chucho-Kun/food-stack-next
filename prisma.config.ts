// prisma.config.ts
import { defineConfig, env } from 'prisma/config';

process.loadEnvFile(); // c12 (loader del config) no carga el .env por su cuenta

export default defineConfig({
  datasource: {
    url: env('DATABASE_URL'),
  },
  migrations: {
    seed: "ts-node --project tsconfig.seed.json prisma/seed.ts",
  },
});
