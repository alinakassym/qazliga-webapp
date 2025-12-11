import type { FC } from 'react';
import { useState } from 'react';
import { Box, Select, MenuItem, FormControl, CircularProgress } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';
import { useCities } from '@/hooks';

export const SelectsRow: FC = () => {
  const { data: cities, isLoading, isError } = useCities();
  const [selectedCityId, setSelectedCityId] = useState<string>('');
  const [secondValue, setSecondValue] = useState('option1');

  const handleCityChange = (event: SelectChangeEvent) => {
    setSelectedCityId(event.target.value);
  };

  const handleSecondChange = (event: SelectChangeEvent) => {
    setSecondValue(event.target.value);
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

      <FormControl sx={{ flex: 1 }}>
        <Select
          value={secondValue}
          onChange={handleSecondChange}
          size="small"
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
          <MenuItem value="option1">Вариант 1</MenuItem>
          <MenuItem value="option2">Вариант 2</MenuItem>
          <MenuItem value="option3">Вариант 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
