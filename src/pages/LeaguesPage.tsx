// qazliga/src/pages/LeaguesPage.tsx

import type { FC, ReactElement } from 'react';
import { Box, Typography, CircularProgress, List, ListItem, ListItemText } from '@mui/material';
import { useLeagues } from '@/hooks';

const LeaguesPage: FC = (): ReactElement => {
  const { data, isLoading, isError } = useLeagues();

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
        Лиги
      </Typography>

      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <CircularProgress />
        </Box>
      )}

      {isError && (
        <Typography variant="body1" color="error">
          Ошибка загрузки лиг
        </Typography>
      )}

      {data?.leagues && (
        <List>
          {data.leagues.map(league => (
            <ListItem key={league.id}>
              <ListItemText
                primary={league.name}
                secondary={`Город: ${league.cityName} | Группа: ${league.leagueGroupName}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
};

export default LeaguesPage;
