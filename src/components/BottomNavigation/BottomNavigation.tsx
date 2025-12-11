import type { FC, ReactElement } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction,
  Paper,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import PersonIcon from '@mui/icons-material/Person';

interface NavigationItem {
  label: string;
  path: string;
  icon: ReactElement;
}

const navigationItems: NavigationItem[] = [
  { label: 'Главная', path: '/', icon: <HomeIcon /> },
  { label: 'Лиги', path: '/leagues', icon: <EmojiEventsIcon /> },
  { label: 'Рейтинг', path: '/rating', icon: <LeaderboardIcon /> },
  { label: 'Профиль', path: '/profile', icon: <PersonIcon /> },
];

export const BottomNavigation: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const currentPath = location.pathname;
  const currentValue = navigationItems.findIndex(item => item.path === currentPath);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    navigate(navigationItems[newValue].path);
  };

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
      elevation={3}
    >
      <MuiBottomNavigation value={currentValue !== -1 ? currentValue : 0} onChange={handleChange}>
        {navigationItems.map(item => (
          <BottomNavigationAction
            key={item.path}
            label={item.label}
            icon={item.icon}
            sx={{
              minWidth: 'auto',
              '&.Mui-selected': {
                color: 'primary.main',
              },
            }}
          />
        ))}
      </MuiBottomNavigation>
    </Paper>
  );
};
