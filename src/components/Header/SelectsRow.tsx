import type { FC } from 'react';
import { useState } from 'react';
import { Box, Select, MenuItem, FormControl } from '@mui/material';
import type { SelectChangeEvent } from '@mui/material';

export const SelectsRow: FC = () => {
  const [firstValue, setFirstValue] = useState('option1');
  const [secondValue, setSecondValue] = useState('option1');

  const handleFirstChange = (event: SelectChangeEvent) => {
    setFirstValue(event.target.value);
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
      <FormControl sx={{ flex: 1 }}>
        <Select
          value={firstValue}
          onChange={handleFirstChange}
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
          <MenuItem value="option1">Опция 1</MenuItem>
          <MenuItem value="option2">Опция 2</MenuItem>
          <MenuItem value="option3">Опция 3</MenuItem>
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
