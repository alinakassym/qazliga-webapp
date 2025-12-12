import type { FC } from 'react';
import { Box, Avatar, Typography } from '@mui/material';

interface UserCardProps {
  photoUrl?: string;
  firstName?: string;
  lastName?: string;
  username: string;
}

export const UserCard: FC<UserCardProps> = ({ photoUrl, firstName, lastName, username }) => {
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
        alt={username}
        sx={{
          width: 64,
          height: 64,
          fontSize: 24,
          fontWeight: '600',
          textAlign: 'center',
          backgroundColor: theme => theme.palette.primary.main,
        }}
      >
        {firstName && lastName
          ? firstName.charAt(0).toUpperCase() + lastName.charAt(0).toUpperCase()
          : username.charAt(0).toUpperCase()}
      </Avatar>

      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" sx={{ marginBottom: 1, fontWeight: 600, lineHeight: 1 }}>
          {`${firstName ?? ''}${lastName ? ' ' + lastName : ''}`}
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
