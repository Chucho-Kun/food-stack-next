// prisma.config.ts
import { existsSync } from 'node:fs';
import { defineConfig, env } from 'prisma/config';

// c12 (loader del config) no carga el .env por su cuenta.
// En Vercel no existe archivo .env (las vars ya están en process.env), así que solo
// cargamos si el archivo existe para no romper el build con ENOENT.
if (existsSync('.env')) {
  process.loadEnvFile();
}

export default defineConfig({
  datasource: {
    url: env('DATABASE_URL'),
  },
  migrations: {
    seed: "ts-node --project tsconfig.seed.json prisma/seed.ts",
  },
});
