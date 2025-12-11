import { useQuery } from '@tanstack/react-query';
import { citiesService } from '@/services/cities';
import type { City } from '@/types';

export const useCities = () => {
  return useQuery<City[], Error>({
    queryKey: ['cities'],
    queryFn: citiesService.getCities,
    staleTime: 5 * 60 * 1000, // 5 минут
    gcTime: 10 * 60 * 1000, // 10 минут (было cacheTime в старых версиях)
  });
};
