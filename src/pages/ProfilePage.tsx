import type { FC, ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import { UserCard } from '@/components';
import { getTelegramUser } from '@/utils/telegram';

const ProfilePage: FC = (): ReactElement => {
  const user = getTelegramUser();
  const navigate = useNavigate();

  const handleManagementClick = () => {
    navigate('/management');
  };

  return (
    <Box sx={{ p: 2 }}>
      {user && (
        <UserCard
          photoUrl={user?.photo_url ?? undefined}
          firstName={user?.first_name ?? undefined}
          lastName={user?.last_name ?? undefined}
          username={user.username}
        />
      )}
      <Button
        variant="contained"
        fullWidth
        onClick={handleManagementClick}
        sx={{
          mt: 2,
          py: 1.5,
          fontSize: '1rem',
          fontWeight: 600,
          textTransform: 'none',
        }}
      >
        Управление
      </Button>
    </Box>
  );
};

export default ProfilePage;
