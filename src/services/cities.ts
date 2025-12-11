import { api } from './api';
import type { City } from '@/types';

export const citiesService = {
  getCities: async (): Promise<City[]> => {
    const response = await api.get<City[]>('/cities');
    return response.data;
  },
};
