// qazliga/src/components/Header/ManagementHeader.tsx

import type { FC } from 'react';
import { AppBar, Box, Container, Toolbar, useTheme } from '@mui/material';
import { useSafePaddingTop, useSafePlatform } from '@/hooks';
import logoUrl from '@/assets/qazliga-logo.png';

const ManagementHeader: FC = () => {
  const theme = useTheme();
  const gradient = theme.palette.gradient;
  const safePaddingTop = useSafePaddingTop(48, 0);
  const platform = useSafePlatform();

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        background: `linear-gradient(90deg, ${gradient[0]}, ${gradient[1]}, ${gradient[2]}, ${gradient[5]})`,
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
      </Container>
    </AppBar>
  );
};

export default ManagementHeader;
