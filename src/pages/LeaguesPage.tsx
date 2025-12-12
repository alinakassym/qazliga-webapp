// qazliga/src/pages/LeaguesPage.tsx

import type { FC, ReactElement } from 'react';
import { useMemo } from 'react';
import { Box, Typography, CircularProgress, List, ListItem, ListItemText } from '@mui/material';
import { useLeagues } from '@/hooks';

const LeaguesPage: FC = (): ReactElement => {
  const { data, isLoading, isError } = useLeagues();

  const leaguesByCity = useMemo(() => {
    if (!data?.leagues) return {};
    return data.leagues.reduce(
      (acc, league) => {
        if (!acc[league.cityName]) {
          acc[league.cityName] = [];
        }
        acc[league.cityName].push(league);
        return acc;
      },
      {} as Record<string, typeof data.leagues>
    );
  }, [data]);

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
        <Box>
          {Object.entries(leaguesByCity).map(([cityName, leagues]) => (
            <Box key={cityName} sx={{ mb: 4 }}>
              <Typography variant="h6" component="h2" sx={{ mb: 2 }}>
                {cityName}
              </Typography>
              <List>
                {leagues.map(league => (
                  <ListItem key={league.id}>
                    <ListItemText
                      primary={league.name}
                      secondary={`Группа: ${league.leagueGroupName}`}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default LeaguesPage;
