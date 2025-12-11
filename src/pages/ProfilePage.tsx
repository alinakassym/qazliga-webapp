import type { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { UserCard } from '@/components';
import { getTelegramUser } from '@/utils/telegram';

const ProfilePage: FC = (): ReactElement => {
  const user = getTelegramUser();

  return (
    <Box sx={{ p: 2 }}>
      {user && (
        <UserCard
          photoUrl={user?.photo_url ?? undefined}
          name={`${user.first_name}${user.last_name ? ' ' + user.last_name : ''}`}
          username={user.username}
        />
      )}
    </Box>
  );
};

export default ProfilePage;
