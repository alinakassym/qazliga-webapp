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
            <Accordion
              key={cityName}
              sx={{
                backgroundColor: theme => theme.palette.bgOpacity,
              }}
            >
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography variant="subtitle1">{cityName}</Typography>
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
