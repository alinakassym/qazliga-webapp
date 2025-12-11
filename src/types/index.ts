export interface User {
  id: number;
  username?: string;
  firstName: string;
  lastName?: string;
  photoUrl?: string;
}

export interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
  photo_url?: string;
}

export type LoadingState = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface City {
  id: number;
  name: string;
}

export * from './sponsors';
