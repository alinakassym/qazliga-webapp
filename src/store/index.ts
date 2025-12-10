import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    // Добавим reducers по мере необходимости
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
