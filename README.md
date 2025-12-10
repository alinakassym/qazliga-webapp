# QAZLIGA

QAZLIGA - Telegram WebApp built with modern React stack.

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Fast build tool
- **Material UI** - UI components
- **Redux Toolkit** - State management
- **React Router** - Routing
- **Tailwind CSS** - Utility-first CSS
- **React Query** - Server state management
- **Telegram WebApp SDK** - Telegram integration

## Project Structure

```
src/
├── components/     # Reusable UI components
├── features/       # Feature-specific modules
├── pages/          # Page components
├── store/          # Redux store configuration
├── hooks/          # Custom React hooks
├── utils/          # Utility functions
├── types/          # TypeScript type definitions
├── services/       # API services
├── assets/         # Static assets
└── theme/          # Material UI theme configuration
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Running with ngrok

To test the app with Telegram Mini App or expose it to the internet:

1. Start the development server:
```bash
npm run dev
```

2. In a separate terminal, start ngrok:
```bash
ngrok http 3000
```

3. Use the provided ngrok URL (e.g., `https://xxxx.ngrok-free.dev`) to access your app from anywhere or set it as your Telegram Mini App URL.

## Development

### Code Quality

- **ESLint** - Linting with TypeScript support
- **Prettier** - Code formatting

Run linter:
```bash
npm run lint
```

### Architecture Guidelines

- Follow feature-based structure in `/features`
- Keep components small and reusable
- Use TypeScript for all files
- Use Redux Toolkit for global state
- Use React Query for server state
- Follow Material UI theming system
- Use Tailwind utilities for quick styling

## Telegram WebApp Integration

The app automatically integrates with Telegram WebApp API:
- Detects Telegram theme (light/dark)
- Reads user information
- Provides Telegram-specific UI utilities
- Supports MainButton, BackButton, HapticFeedback

## Commit Convention

We follow Conventional Commits:
- `feat(component): add new feature`
- `fix(component): fix bug`
- `chore(component): update dependencies`
- `docs: update documentation`
- `refactor(component): refactor code`
