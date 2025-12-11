// qazliga/src/components/Header/Header.tsx

import type { FC } from 'react';
import { AppBar, Box, Container, Toolbar, useTheme } from '@mui/material';
import { SponsorsBar } from './SponsorsBar';
import { SelectsRow } from './SelectsRow';
import { useSafePaddingTop, useSafePlatform } from '@/hooks';
import logoUrl from '@/assets/qazliga-logo.png';

interface HeaderProps {
  showSponsors?: boolean;
}

const Header: FC<HeaderProps> = ({ showSponsors = false }) => {
  const theme = useTheme();
  const gradient = theme.palette.gradient;
  const safePaddingTop = useSafePaddingTop(48, 0);
  const platform = useSafePlatform();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: `linear-gradient(145deg, ${gradient})`,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: '64px', sm: '70px' },
            pt: platform === 'android' ? `${safePaddingTop - 14}px` : `${safePaddingTop + 3}px`,
            pb: 1,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <Box
              component="img"
              src={logoUrl}
              alt="QAZLIGA"
              sx={{
                height: { xs: 48, sm: 56 },
                width: 'auto',
                maxWidth: '120px',
                objectFit: 'contain',
              }}
            />
          </Box>
        </Toolbar>

        {showSponsors && <SponsorsBar />}
        <SelectsRow />
      </Container>
    </AppBar>
  );
};

export default Header;
