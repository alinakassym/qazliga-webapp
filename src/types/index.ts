export interface User {
  id: number;
  username?: string;
  firstName: string;
  lastName?: string;
  photoUrl?: string;
}

export interface TelegramUser {
  id: number;
  first_name?: string;
  last_name?: string;
  username: string;
  language_code?: string;
  is_premium?: boolean;
  photo_url?: string;
}

export type LoadingState = 'idle' | 'loading' | 'succeeded' | 'failed';

export interface City {
  id: number;
  name: string;
  icon?: string;
}

export interface League {
  id: number;
  name: string;
  order: number;
  cityId: number;
  cityName: string;
  leagueGroupId: number;
  leagueGroupName: string;
  icon?: string;
}

export interface LeaguesQueryParams {
  cityId?: number;
  leagueGroupId?: number;
}

export * from './sponsors';
