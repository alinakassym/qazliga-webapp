// qazliga/src/services/leagues.ts

import { api, API_URL } from './api';
import type { League, LeaguesQueryParams } from '@/types';

export const leaguesService = {
  getLeagues: async (params?: LeaguesQueryParams): Promise<{ leagues: League[] }> => {
    const response = await api.get<{ leagues: League[] }>('/leagues', {
      params,
    });

    const leaguesWithIcons = response.data.leagues.map(league => ({
      ...league,
      icon: `${API_URL}/cities/${league.cityId}/icon?width=80&height=80`,
    }));

    return { leagues: leaguesWithIcons };
  },
};
