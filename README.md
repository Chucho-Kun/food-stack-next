# FullStack Platform NEXT / REACT / TypeScript
Platform: menu - prepared food orders user/administrator for food establishment PostgreSQL(render.com) + Next JS + React + Node - (Full-Stack CRUD App)
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
