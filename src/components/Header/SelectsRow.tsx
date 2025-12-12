// qazliga/src/components/Header/SelectsRow.tsx

import type { FC } from 'react';
import { useState } from 'react';
import { Box, Select, MenuItem, FormControl, CircularProgress } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import { useCities, useLeagues } from '@/hooks';

export const SelectsRow: FC = () => {
  const { data: cities, isLoading, isError } = useCities();
  const [selectedCityId, setSelectedCityId] = useState<string>('1');
  const [selectedLeagueId, setSelectedLeagueId] = useState<string>('');

  const {
    data: leaguesData,
    isLoading: isLeaguesLoading,
    isError: isLeaguesError,
  } = useLeagues({ cityId: selectedCityId ? Number(selectedCityId) : undefined });

  const handleCityChange = (event: SelectChangeEvent) => {
    setSelectedCityId(event.target.value);
    setSelectedLeagueId('');
  };

  const handleLeagueChange = (event: SelectChangeEvent) => {
    setSelectedLeagueId(event.target.value);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        pb: 2,
      }}
    >
      <FormControl sx={{ flex: 1 }} disabled={isLoading || isError}>
        <Select
          value={selectedCityId}
          onChange={handleCityChange}
          size="small"
          displayEmpty
          renderValue={selected => {
            if (!selected) {
              return <span style={{ opacity: 0.6 }}>Выберите город</span>;
            }
            const city = cities?.find(c => c.id.toString() === selected);
            return city?.name || '';
          }}
          sx={{
            backgroundColor: theme => theme.palette.bgOpacity,
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: 2,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: theme => theme.palette.primary.main,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: theme => theme.palette.primary.main,
            },
          }}
        >
          {isLoading && (
            <MenuItem disabled>
              <CircularProgress size={20} />
            </MenuItem>
          )}
          {isError && <MenuItem disabled>Ошибка загрузки</MenuItem>}
          {cities?.map(city => (
            <MenuItem key={city.id} value={city.id.toString()}>
              {city.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl sx={{ flex: 1 }} disabled={isLeaguesLoading || isLeaguesError}>
        <Select
          value={selectedLeagueId}
          onChange={handleLeagueChange}
          size="small"
          displayEmpty
          renderValue={selected => {
            if (!selected) {
              return <span style={{ opacity: 0.6 }}>Выберите лигу</span>;
            }
            const league = leaguesData?.leagues.find(l => l.id.toString() === selected);
            return league?.name || '';
          }}
          sx={{
            backgroundColor: theme => theme.palette.bgOpacity,
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            borderRadius: 2,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'transparent',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: theme => theme.palette.primary.main,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: theme => theme.palette.primary.main,
            },
          }}
        >
          {isLeaguesLoading && (
            <MenuItem disabled>
              <CircularProgress size={20} />
            </MenuItem>
          )}
          {isLeaguesError && <MenuItem disabled>Ошибка загрузки</MenuItem>}
          {leaguesData?.leagues.map(league => (
            <MenuItem key={league.id} value={league.id.toString()}>
              {league.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};
