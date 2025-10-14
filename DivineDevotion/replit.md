# Meu Devocionalzinho Kids - Project Documentation

## Overview

Meu Devocionalzinho Kids is a Christian devotional product landing page for families with children aged 3-15. The application is a single-page marketing website built with React and Express, designed to convert visitors into customers through compelling copy, social proof, and conversion-optimized design patterns. The site is mobile-first, optimized primarily for iPhone SE (320px width) and larger devices, with a warm, family-oriented aesthetic focused on faith and spiritual growth.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18+ with TypeScript using Vite as the build tool and development server.

**Routing**: Wouter for client-side routing - a lightweight routing solution for single-page applications.

**UI Component Library**: shadcn/ui (New York style variant) with Radix UI primitives. This provides accessible, customizable components with consistent design tokens. Components are located in `client/src/components/ui/` and follow a local-first approach where components are copied into the project rather than installed as dependencies.

**Styling**: Tailwind CSS with custom design tokens defined in CSS variables. The design system uses a light-mode-only color palette with soft blues, yellows, and golden accents. Typography uses Quicksand (Google Fonts) for headings and Inter for body text to create a friendly, approachable feel.

**State Management**: TanStack Query (React Query) for server state management. Custom query client configuration in `client/src/lib/queryClient.ts` handles API requests with credential-based authentication.

**Form Handling**: React Hook Form with Hookform Resolvers for validation, though forms are not currently implemented in the visible landing page code.

### Backend Architecture

**Server Framework**: Express.js running on Node.js with TypeScript in ESM module format.

**API Design**: RESTful API pattern with routes prefixed under `/api`. The server includes middleware for JSON parsing, URL encoding, request logging, and error handling.

**Development Workflow**: The application uses Vite middleware mode in development, where Express serves the Vite dev server. In production, static files are built and served from `dist/public`.

**Build Process**: 
- Frontend: Vite builds React application to `dist/public`
- Backend: esbuild bundles server code to `dist/index.js` with external packages

### Data Storage

**ORM**: Drizzle ORM configured for PostgreSQL via `@neondatabase/serverless` driver.

**Database Schema**: Located in `shared/schema.ts`. Currently defines a minimal `users` table with id, username, and password fields. Uses Drizzle Zod for runtime schema validation.

**Storage Interface**: Abstracted through `IStorage` interface in `server/storage.ts` with an in-memory implementation (`MemStorage`) for development/testing. This allows swapping storage backends without changing application code.

**Migrations**: Drizzle Kit manages schema migrations with configuration in `drizzle.config.ts`. Migrations output to `./migrations` directory.

### Design System

**Color Strategy**: Light mode only with CSS custom properties for theming. Primary colors include soft blue backgrounds, soft yellow highlights, and golden accents for CTAs and special elements.

**Responsive Breakpoints**: Mobile-first approach with breakpoints at 768px (tablet) and 1024px (desktop).

**Typography Scale**: Responsive type sizing using Tailwind's text utilities, scaling from mobile to desktop for optimal readability.

**Component Patterns**: Cards, buttons, badges, and form controls follow consistent elevation and border treatments defined through CSS variables like `--button-outline` and `--elevate-1`.

### External Dependencies

**UI & Styling**:
- Radix UI primitives (accordion, dialog, dropdown-menu, popover, etc.) - Accessible component primitives
- Tailwind CSS with PostCSS - Utility-first styling
- class-variance-authority & clsx - Conditional className composition
- Lucide React - Icon library

**State & Data Management**:
- TanStack Query - Server state management and caching
- React Hook Form - Form state management
- Zod - Runtime type validation
- Drizzle ORM & Drizzle Zod - Database ORM and schema validation

**Database**:
- Neon Database (@neondatabase/serverless) - Serverless PostgreSQL
- PostgreSQL - Primary database (configured via DATABASE_URL environment variable)

**Development Tools**:
- Vite - Frontend build tool and dev server
- tsx - TypeScript execution for Node.js
- esbuild - Backend bundler
- TypeScript - Type safety across the stack

**Session Management**:
- connect-pg-simple - PostgreSQL session store (prepared for implementation)

**Utilities**:
- date-fns - Date manipulation
- cmdk - Command menu component
- embla-carousel-react - Carousel functionality
- vaul - Drawer component

**Replit Integration**:
- @replit/vite-plugin-runtime-error-modal - Development error overlay
- @replit/vite-plugin-cartographer - Development tooling
- @replit/vite-plugin-dev-banner - Development banner

**Google Fonts**: Quicksand and Inter loaded via CDN for typography.