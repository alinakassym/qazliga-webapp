import { api } from './api';
import type { League, LeaguesQueryParams } from '@/types';

export const leaguesService = {
  getLeagues: async (params?: LeaguesQueryParams): Promise<{ leagues: League[] }> => {
    const response = await api.get<{ leagues: League[] }>('/leagues', {
      params,
    });
    return response.data;
  },
};
