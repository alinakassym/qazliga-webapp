// qazliga/src/pages/LeaguesPage.tsx

import type { FC, ReactElement } from 'react';
import { useMemo } from 'react';
import {
  Box,
  Typography,
  CircularProgress,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Avatar,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
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
            <Accordion key={cityName}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Avatar src={leagues[0]?.icon} alt={cityName} sx={{ mr: 2 }} />
                  <Typography variant="subtitle1">{cityName}</Typography>
                </Box>
              </AccordionSummary>
              <AccordionDetails>
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
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default LeaguesPage;
