import type { FC } from 'react';
import { Container, Typography, Paper } from '@mui/material';
import { getTelegramUser } from '@/utils/telegram';

const HomePage: FC = () => {
  const user = getTelegramUser();

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      {user && (
        <Paper sx={{ p: 3, mb: 3, backgroundColor: theme => theme.palette.surface }}>
          <Typography variant="h6" gutterBottom>
            User Info
          </Typography>
          <Typography variant="body2">
            <strong>ID:</strong> {user.id}
          </Typography>
          <Typography variant="body2">
            <strong>Name:</strong> {user.first_name} {user.last_name || ''}
          </Typography>
          {user.username && (
            <Typography variant="body2">
              <strong>Username:</strong> @{user.username}
            </Typography>
          )}
        </Paper>
      )}

      <Paper sx={{ p: 3, backgroundColor: theme => theme.palette.surface }}>
        <Typography variant="h6" gutterBottom>
          Getting Started
        </Typography>
        <Typography variant="body2" sx={{ mb: 2 }}>
          This is a starter template for QAZLIGA Telegram WebApp built with:
        </Typography>
        <Typography component="ul" variant="body2">
          <li>React 19 + TypeScript</li>
          <li>Vite - Fast build tool</li>
          <li>Material UI - UI components</li>
          <li>Redux Toolkit - State management</li>
          <li>React Router - Routing</li>
          <li>Tailwind CSS - Utility-first CSS</li>
          <li>React Query - Server state management</li>
          <li>Telegram WebApp SDK - Telegram integration</li>
        </Typography>
        <Typography variant="body2" sx={{ mt: 2 }}>
          Start building your QAZLIGA WebApp by modifying the code in the <code>src/</code>{' '}
          directory.
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci corporis veniam aut
            magnam earum? Eos nesciunt dolorem similique tempore et repellendus unde soluta
            adipisci! Quod reiciendis aliquam suscipit quidem eveniet? Non repudiandae consequuntur
            reprehenderit earum molestias vel dolores pariatur harum nostrum natus veniam quos
            aliquid ipsum sint, quo ipsa eos, quia nobis totam recusandae delectus quasi sequi odit
            magni. Doloribus? Commodi temporibus, repellat dolor voluptate exercitationem similique
            corporis cumque
          </p>
        </Typography>
      </Paper>
    </Container>
  );
};

export default HomePage;
