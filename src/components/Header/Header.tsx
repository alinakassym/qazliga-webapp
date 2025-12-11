// qazliga/src/components/Header/Header.tsx

import type { FC } from 'react';
import { AppBar, Box, Container, Toolbar, useTheme } from '@mui/material';
import { SponsorsBar } from './SponsorsBar';
import logoUrl from '@/assets/qazliga-logo.png';

interface HeaderProps {
  showSponsors?: boolean;
}

const Header: FC<HeaderProps> = ({ showSponsors = false }) => {
  const theme = useTheme();
  const gradient = theme.palette.gradient;

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: `linear-gradient(135deg, ${gradient[0]} 0%, ${gradient[1]} 33%, ${gradient[2]} 66%, ${gradient[3]} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            minHeight: { xs: '64px', sm: '70px' },
            pt: 6,
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
      </Container>
    </AppBar>
  );
};

export default Header;
