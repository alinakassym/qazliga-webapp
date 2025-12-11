import type { FC } from 'react';
import { Box, useTheme } from '@mui/material';
import type { Sponsor } from '@/types';

// Placeholder sponsors - replace with real data from API or props
const sponsors: Sponsor[] = [
  {
    id: '1',
    name: 'KMFF',
    logo: 'https://via.placeholder.com/80x40/5e35b1/ffffff?text=KMFF',
  },
  {
    id: '2',
    name: 'WMF',
    logo: 'https://via.placeholder.com/80x40/5e35b1/ffffff?text=WMF',
  },
  {
    id: '3',
    name: 'UEFA',
    logo: 'https://via.placeholder.com/80x40/5e35b1/ffffff?text=UEFA',
  },
];

interface SponsorsBarProps {
  sponsorsList?: Sponsor[];
}

export const SponsorsBar: FC<SponsorsBarProps> = ({ sponsorsList = sponsors }) => {
  const theme = useTheme();

  if (!sponsorsList || sponsorsList.length === 0) {
    return null;
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: { xs: 2, sm: 3, md: 4 },
        py: 3,
        px: 2,
        flexWrap: 'wrap',
      }}
    >
      {sponsorsList.map(sponsor => (
        <Box
          key={sponsor.id}
          component={sponsor.url ? 'a' : 'div'}
          href={sponsor.url}
          target={sponsor.url ? '_blank' : undefined}
          rel={sponsor.url ? 'noopener noreferrer' : undefined}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: { xs: 32, sm: 40 },
            opacity: 0.9,
            transition: 'opacity 0.2s ease, transform 0.2s ease',
            cursor: sponsor.url ? 'pointer' : 'default',
            textDecoration: 'none',
            '&:hover': sponsor.url
              ? {
                  opacity: 1,
                  transform: 'scale(1.05)',
                }
              : {},
          }}
        >
          <Box
            component="img"
            src={sponsor.logo}
            alt={sponsor.name}
            sx={{
              height: '100%',
              width: 'auto',
              maxWidth: { xs: 60, sm: 80 },
              objectFit: 'contain',
              filter: theme.palette.mode === 'dark' ? 'brightness(1.1)' : 'brightness(1)',
            }}
          />
        </Box>
      ))}
    </Box>
  );
};
