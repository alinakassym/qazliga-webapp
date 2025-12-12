// qazliga/src/components/BottomNavigation/BottomNavigation.tsx

import type { FC } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { BottomNavigation as MuiBottomNavigation, BottomNavigationAction } from '@mui/material';
import { TabIcon } from '@/components';
import { useSafePaddingBottom, useSafePlatform } from '@/hooks';

interface NavigationItem {
  label: string;
  path: string;
  iconName: 'home' | 'trophy' | 'ranking' | 'leaderboard' | 'person';
}

const navigationItems: NavigationItem[] = [
  { label: 'Главная', path: '/', iconName: 'home' },
  { label: 'Лиги', path: '/leagues', iconName: 'trophy' },
  { label: 'Рейтинг', path: '/rating', iconName: 'ranking' },
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
    <div
      style={{
        position: 'fixed',
        bottom: `${platform === 'ios' ? safePaddingBottom + 6 : safePaddingBottom}px`,
        left: 8,
        right: 8,

        zIndex: 1000,
      }}
    >
      <MuiBottomNavigation
        value={currentValue !== -1 ? currentValue : 0}
        onChange={handleChange}
        showLabels
        sx={{
          height: { xs: 80, sm: 96 },
          borderRadius: 40,
          border: theme => `1px solid ${theme.palette.divider}`,
          overflow: 'hidden',
          backgroundColor: theme => theme.palette.bgOpacity,
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
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
    </div>
  );
};
