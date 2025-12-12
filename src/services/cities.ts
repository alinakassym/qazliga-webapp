import { api, API_URL } from './api';
import type { City } from '@/types';

export const citiesService = {
  getCities: async (): Promise<City[]> => {
    const response = await api.get<City[]>('/cities');

    const citiesWithIcons = response.data.map(city => ({
      ...city,
      icon: `${API_URL}/cities/${city.id}/icon?width=80&height=80`,
    }));

    return citiesWithIcons;
  },
};
