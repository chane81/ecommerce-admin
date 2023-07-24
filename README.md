# Ecommerce Admin

## Stack

- next.js 13
- shacdn-ui
- tailwindcss
- typescript 5
- clerk.com (인증관리 cloud)

## Setup

- base setup

  ```bash
  $ npx create-next-app ecommerce-admin --typescript --tailwind --eslint
  $ npx shadcn-ui@latest init

  Which style would you like to use? > Default
  Which color would you like to use as base color? > Slate
  Where is your global CSS file? > app/globals.css
  Would you like to use CSS variables for colors? > yes
  Where is your tailwind.config.js located? > tailwind.config.js
  Configure the import alias for components > @/components
  Configure the import alias for utils > @/lib/utils
  Are you using React Server Components? > yes
  Write configuration to components.json > yes
  ```

- Clerk Setup
  ```bash
  $ yarn add @clerk/nextjs
  ```

## 참고 문서

- Clerk Docs (인증관리)
  - https://clerk.com/docs
