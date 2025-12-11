import type { FC } from 'react';
import { AppBar, Box, Container, Toolbar, useTheme } from '@mui/material';
import { SponsorsBar } from './SponsorsBar';
import logoUrl from '@/assets/qazliga-logo.png';

interface HeaderProps {
  showSponsors?: boolean;
}

const Header: FC<HeaderProps> = ({ showSponsors = false }) => {
  const theme = useTheme();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.mode === 'dark' ? '#4a148c 0%, #7b1fa2 100%' : '#5e35b1 0%, #7e57c2 100%'})`,
        borderBottom: `1px solid ${theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.2)'}`,
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
