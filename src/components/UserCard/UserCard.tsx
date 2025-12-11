import type { FC } from 'react';
import { Box, Avatar, Typography } from '@mui/material';

interface UserCardProps {
  photoUrl?: string;
  name: string;
  username?: string;
}

export const UserCard: FC<UserCardProps> = ({ photoUrl, name, username }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        p: 2,
        backgroundColor: theme => theme.palette.surface,
        borderRadius: 2,
      }}
    >
      <Avatar
        src={photoUrl}
        alt={name}
        sx={{
          width: 56,
          height: 56,
        }}
      >
        {!photoUrl && name.charAt(0).toUpperCase()}
      </Avatar>

      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 600, lineHeight: 1 }}>
          {name}
        </Typography>
        {username && (
          <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1 }}>
            @{username}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
