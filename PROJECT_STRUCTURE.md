# QAZLIGA Project Structure

## Overview
QAZLIGA - это Telegram WebApp, построенное с использованием современного React стека.

## Технологический стек

### Core
- **React 19.2** - UI библиотека
- **TypeScript 5.9** - Типизация
- **Vite 7.2** - Сборщик

### UI & Styling
- **Material UI 7.3** - UI компоненты
- **Tailwind CSS 4.1** - Utility-first CSS
- **Emotion** - CSS-in-JS для Material UI

### State Management
- **Redux Toolkit 2.11** - Глобальное состояние
- **React Query 5.90** - Серверное состояние

### Routing & API
- **React Router 7.10** - Роутинг
- **Axios 1.13** - HTTP клиент

### Telegram Integration
- **@telegram-apps/sdk-react 3.3** - Telegram WebApp SDK

### Development Tools
- **ESLint 9.39** - Линтер
- **Prettier 3.7** - Форматирование кода
- **TypeScript ESLint 8.46** - TypeScript правила для ESLint

## Структура папок

```
qazliga/
├── src/
│   ├── components/        # Переиспользуемые UI компоненты
│   │   └── ExampleComponent.tsx
│   ├── features/          # Модули с бизнес-логикой (пока пустая)
│   ├── pages/             # Страницы приложения
│   │   └── HomePage.tsx
│   ├── store/             # Redux store
│   │   └── index.ts
│   ├── hooks/             # Custom React hooks
│   │   ├── index.ts
│   │   ├── useAppDispatch.ts
│   │   └── useAppSelector.ts
│   ├── utils/             # Утилиты
│   │   └── telegram.ts
│   ├── types/             # TypeScript типы
│   │   └── index.ts
│   ├── services/          # API сервисы
│   │   └── api.ts
│   ├── assets/            # Статические файлы
│   ├── theme/             # Material UI тема
│   │   └── index.ts
│   ├── App.tsx            # Главный компонент
│   ├── main.tsx           # Точка входа
│   └── index.css          # Глобальные стили
├── public/                # Публичные файлы
├── dist/                  # Билд (генерируется)
├── node_modules/          # Зависимости
├── index.html             # HTML шаблон
├── vite.config.ts         # Vite конфигурация
├── tsconfig.json          # TypeScript конфигурация
├── tsconfig.app.json      # TypeScript для app
├── tsconfig.node.json     # TypeScript для node
├── eslint.config.js       # ESLint конфигурация
├── postcss.config.js      # PostCSS конфигурация
├── tailwind.config.js     # Tailwind конфигурация
├── .prettierrc            # Prettier конфигурация
├── .gitignore             # Git ignore
├── .env.example           # Пример environment variables
├── package.json           # Зависимости и скрипты
└── README.md              # Документация

```

## Ключевые файлы

### App.tsx
Главный компонент приложения с:
- Redux Provider
- React Query Provider
- Material UI ThemeProvider
- React Router
- Telegram WebApp инициализация

### theme/index.ts
Конфигурация Material UI темы с:
- Поддержка light/dark режима
- Интеграция с Telegram цветами
- Кастомная типография

### utils/telegram.ts
Утилиты для работы с Telegram WebApp API:
- Получение информации о пользователе
- Определение темы (light/dark)
- Типизация Telegram WebApp объектов

### services/api.ts
Настроенный Axios инстанс с:
- Автоматическая передача Telegram init data
- Interceptors для обработки ошибок
- Базовый URL из переменных окружения

## NPM Scripts

```bash
npm run dev          # Запуск dev сервера (http://localhost:3000)
npm run build        # Production build
npm run preview      # Preview production build
npm run lint         # Запуск ESLint
npm run lint:fix     # Исправить ошибки ESLint автоматически
npm run format       # Форматирование кода с Prettier
```

## Паттерны кода

### Компоненты
```typescript
import type { FC } from 'react';

interface ComponentProps {
  title: string;
  onClick?: () => void;
}

const Component: FC<ComponentProps> = ({ title, onClick }) => {
  return <div>{title}</div>;
};

export default Component;
```

### Redux Hooks
```typescript
import { useAppDispatch, useAppSelector } from '@/hooks';

// Вместо useDispatch и useSelector
const dispatch = useAppDispatch();
const state = useAppSelector(state => state.someSlice);
```

### API запросы
```typescript
import api from '@/services/api';

const fetchData = async () => {
  const response = await api.get('/endpoint');
  return response.data;
};
```

## Environment Variables

Создайте `.env` файл на основе `.env.example`:

```env
VITE_API_URL=http://localhost:5000/api
VITE_BOT_USERNAME=your_bot_username
```

## Следующие шаги

1. Настроить backend API
2. Добавить конкретные features в `/features`
3. Создать больше страниц в `/pages`
4. Настроить Redux slices для state management
5. Добавить React Query queries/mutations
6. Интегрировать с Telegram Bot API
7. Добавить тесты (Jest + React Testing Library)

## Конвенции коммитов

```
feat(component): добавить новую фичу
fix(component): исправить баг
chore(component): обновить зависимости
docs: обновить документацию
refactor(component): рефакторинг кода
```

## Полезные ссылки

- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Vite Documentation](https://vitejs.dev)
- [Material UI Documentation](https://mui.com)
- [Redux Toolkit Documentation](https://redux-toolkit.js.org)
- [React Query Documentation](https://tanstack.com/query)
- [Telegram WebApp Documentation](https://core.telegram.org/bots/webapps)
