import type { FC, ReactElement } from 'react';
import { Box, Typography } from '@mui/material';

const ProfilePage: FC = (): ReactElement => {
  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" component="h1" sx={{ mb: 2 }}>
        Профиль
      </Typography>
      <Typography variant="body1" color="text.secondary">
        Здесь будет профиль пользователя
      </Typography>
    </Box>
  );
};

export default ProfilePage;
