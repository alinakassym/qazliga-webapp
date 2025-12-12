import { useQuery } from '@tanstack/react-query';
import { leaguesService } from '@/services/leagues';
import type { League, LeaguesQueryParams } from '@/types';

export const useLeagues = (params?: LeaguesQueryParams) => {
  return useQuery<{ leagues: League[] }, Error>({
    queryKey: ['leagues', params],
    queryFn: () => leaguesService.getLeagues(params),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};
