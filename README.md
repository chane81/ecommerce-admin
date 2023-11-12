# Ecommerce Admin

## Stack

- next.js 13
- shacdn-ui
- tailwindcss
- typescript 5
- clerk.com (인증관리 cloud)
- prisma (orm)
- planetscale (MySql DB) - 10GB 까지 무료

## Setup

- base setup

  ```bash
  # next.js app create
  $ npx create-next-app ecommerce-admin --typescript --tailwind --eslint

  # shadcn-ui init
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
- env file
  ```text
  # clerk 설정
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
  CLERK_SECRET_KEY=
  NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
  NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
  NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
  NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/
  ```
- Prisma Setup

  - Setup

    ```bash
    $ yarn add -D prisma
    $ yarn add @prisma/client

    # prisma init
    $ npx prisma init
    ```

  - DB 스키마 생성
    - prisma/schema.prisma 에서 스키마 작성후 터미널에서 아래 입력하여 생성
    ```bash
    $ npx prisma generate
    $ npx prisma db push
    ```
  - prisma reset
    ```bash
    $ npx prisma migrate reset
    $ npx prisma generate
    $ npx prisma db push
    ```

## 참고 문서

- Clerk Docs (인증관리)
  - https://clerk.com/docs
