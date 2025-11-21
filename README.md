# Wattfork - The open source alternative to Wattpad

## Tech Stack

### Frontend

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Routing**: [TanStack Router](https://tanstack.com/router)
- **Data Fetching**: [TanStack Query](https://tanstack.com/query)
- **UI Components**: [shadcn](https://ui.shadcn.com/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Motion](https://motion.dev/)

### Backend

- **Framework**: [NestJS](https://nestjs.com/)
- **Database**: [Supabase](https://supabase.com/) (PostgreSQL)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Authentication**: [Supabase Auth](https://supabase.com/docs/guides/auth)
- **Email Service**: [Resend](https://resend.com/)

## Getting started

### 1. Install dependencies

Install dependencies for both the frontend and backend.

```bash
# From the root directory
cd backend && pnpm install
cd ../frontend && pnpm install
```

Don't forget to copy the .env.example and fill the required credentials.

### 2. Run database migrations

```bash
cd backend
npx prisma generate
npx prisma migrate dev
```
