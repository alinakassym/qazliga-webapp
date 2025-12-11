import type { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  BottomNavigation as MuiBottomNavigation,
  BottomNavigationAction,
  Paper,
} from '@mui/material';
import { TabIcon } from '@/components';
import { useSafePaddingBottom, useSafePlatform } from '@/hooks';

interface NavigationItem {
  label: string;
  path: string;
  iconName: 'home' | 'trophy' | 'leaderboard' | 'person';
}

const navigationItems: NavigationItem[] = [
  { label: 'Главная', path: '/', iconName: 'home' },
  { label: 'Лиги', path: '/leagues', iconName: 'trophy' },
  { label: 'Рейтинг', path: '/rating', iconName: 'leaderboard' },
  { label: 'Профиль', path: '/profile', iconName: 'person' },
];

export const BottomNavigation: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const safePaddingBottom = useSafePaddingBottom(16, 0);
  const platform = useSafePlatform();

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
      <MuiBottomNavigation
        value={currentValue !== -1 ? currentValue : 0}
        onChange={handleChange}
        showLabels
        sx={{
          pb: `${platform === 'ios' && safePaddingBottom + 2}px`,
        }}
      >
        {navigationItems.map(item => (
          <BottomNavigationAction
            key={item.path}
            label={item.label}
            icon={<TabIcon name={item.iconName} size={24} />}
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
