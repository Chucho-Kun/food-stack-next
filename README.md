# FullStack Platform NEXT / REACT / TypeScript
Platform: menu - prepared food orders user/administrator for food establishment PostgreSQL(render.com) + Next JS + React + Node - (Full-Stack CRUD App)
<img width="1438" height="775" alt="Captura de Pantalla 2025-08-08 a la(s) 16 56 44" src="https://github.com/user-attachments/assets/322a437f-bfab-4865-ae1c-1235a7ff375b" />
<img width="972" height="706" alt="Captura de Pantalla 2025-08-08 a la(s) 16 58 51" src="https://github.com/user-attachments/assets/76e413de-4159-4ef2-9572-e14dc9fb4992" />
<img width="963" height="776" alt="Captura de Pantalla 2025-08-08 a la(s) 17 00 01" src="https://github.com/user-attachments/assets/49a7b634-018d-487f-81f9-6aa5e7069bb4" />
<img width="1315" height="833" alt="Captura de Pantalla 2025-08-08 a la(s) 17 05 20" src="https://github.com/user-attachments/assets/7ae0bff4-3956-49e0-9a99-5bdf8a65e2e7" />

### Manager:
#### Orders https://food-stack-next.vercel.app/admin/orders
#### Products https://food-stack-next.vercel.app/admin/products

### User:
#### Menu: https://food-stack-next.vercel.app/
#### Orders: listas https://food-stack-next.vercel.app/orders

## Technologies
Next + React + Typescript + TailwindCSS + Zod + Zustand + Prisma + Cloudinary
## Developer Notes
## Deploy on Vercel.app https://food-stack-next.vercel.app/

### Configuring the eslint.config.mjs file to avoid errors that block project builds
#### eslint.config.mjs
```
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  {
    files: ["app/generated/prisma/**/*.{js,ts,d.ts}"],
    rules: {
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-require-imports": "off",
    }

  }, {
    ignores: ["app/generated/prisma/**/*"],
  }

];

export default eslintConfig;

```
#### Deploying project
```
npx prisma generate && next build
```
