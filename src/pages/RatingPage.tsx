import type { FC, ReactElement } from 'react';
import { useState } from 'react';
import { Box, Typography, Tabs, Tab, Paper, Container } from '@mui/material';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel: FC<TabPanelProps> = ({ children, value, index }) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
};

const RatingPage: FC = (): ReactElement => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
  };

  return (
    <Container maxWidth="sm" sx={{ py: 2, gap: 0 }}>
      <Tabs
        value={activeTab}
        variant="fullWidth"
        onChange={handleTabChange}
        sx={{
          '& .MuiTabs-indicator': {
            display: 'none',
          },
        }}
      >
        <Tab
          label="Клубы"
          sx={{
            mr: 2,
            minHeight: 'auto',
            py: 1.5,
            px: 3,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '0.95rem',
            fontWeight: 500,
            backgroundColor: theme =>
              activeTab === 0
                ? theme.palette.primary.main
                : theme.palette.action.disabledBackground,
            color: theme => (activeTab === 0 ? '#fff' : theme.palette.text.secondary),
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: theme =>
                activeTab === 0 ? theme.palette.primary.dark : theme.palette.action.hover,
            },
            '&.Mui-selected': {
              color: '#fff',
            },
          }}
        />
        <Tab
          label="Игроки"
          sx={{
            minHeight: 'auto',
            py: 1.5,
            px: 3,
            borderRadius: 2,
            textTransform: 'none',
            fontSize: '0.95rem',
            fontWeight: 500,
            backgroundColor: theme =>
              activeTab === 1
                ? theme.palette.primary.main
                : theme.palette.action.disabledBackground,
            color: theme => (activeTab === 1 ? '#fff' : theme.palette.text.secondary),
            transition: 'all 0.3s ease',
            '&:hover': {
              backgroundColor: theme =>
                activeTab === 1 ? theme.palette.primary.dark : theme.palette.action.hover,
            },
            '&.Mui-selected': {
              color: '#fff',
            },
          }}
        />
      </Tabs>

      <TabPanel value={activeTab} index={0}>
        <Paper sx={{ p: 3, backgroundColor: theme => theme.palette.surface }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            Рейтинг клубов
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Здесь будет отображаться таблица рейтинга клубов с их позициями, количеством очков,
            побед, поражений и другой статистикой.
          </Typography>
          <Box
            sx={{
              p: 4,
              textAlign: 'center',
              backgroundColor: theme => theme.palette.bgOpacity,
              borderRadius: 2,
            }}
          >
            <Typography variant="body1" color="text.secondary">
              📊 Таблица рейтинга клубов в разработке
            </Typography>
          </Box>
        </Paper>
      </TabPanel>

      <TabPanel value={activeTab} index={1}>
        <Paper sx={{ p: 3, backgroundColor: theme => theme.palette.surface }}>
          <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
            Рейтинг игроков
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            Здесь будет отображаться таблица рейтинга игроков с их позициями, количеством очков,
            забитых голов, передач и другой статистикой.
          </Typography>
          <Box
            sx={{
              p: 4,
              textAlign: 'center',
              backgroundColor: theme => theme.palette.bgOpacity,
              borderRadius: 2,
            }}
          >
            <Typography variant="body1" color="text.secondary">
              ⭐ Таблица рейтинга игроков в разработке
            </Typography>
          </Box>
        </Paper>
      </TabPanel>
    </Container>
  );
};

export default RatingPage;
