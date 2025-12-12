import type { FC } from 'react';
import { Container, Typography, Paper, Box } from '@mui/material';
import { Carousel, SportIcon } from '@/components';
import banner1 from '@/assets/1.png';
import banner2 from '@/assets/2.png';
import banner3 from '@/assets/3.png';

const HomePage: FC = () => {
  const carouselItems = [
    {
      id: '1',
      image: banner1,
      alt: 'Banner 1',
    },
    {
      id: '2',
      image: banner2,
      alt: 'Banner 2',
    },
    {
      id: '3',
      image: banner3,
      alt: 'Banner 3',
    },
    {
      id: '4',
      image: 'https://picsum.photos/400/200?random=10',
      alt: 'Banner 4',
    },
    {
      id: '5',
      image: 'https://picsum.photos/400/200?random=20',
      alt: 'Banner 5',
    },
    {
      id: '6',
      image: 'https://picsum.photos/400/200?random=50',
      alt: 'Banner 6',
    },
  ];

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Box sx={{ mb: 3 }}>
        <Carousel items={carouselItems} autoPlayInterval={4000} />
      </Box>

      <Paper sx={{ p: 3, mb: 3, backgroundColor: theme => theme.palette.surface }}>
        <Typography variant="h6" gutterBottom>
          Sport Icons
        </Typography>
        <Box sx={{ display: 'flex', gap: 3, alignItems: 'center', mb: 2 }}>
          <Box sx={{ textAlign: 'center' }}>
            <SportIcon name="volleyball" size={48} color="#5060D8" />
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              Volleyball
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center' }}>
            <SportIcon name="football" size={48} color="#8450D8" />
            <Typography variant="caption" display="block" sx={{ mt: 1 }}>
              Football
            </Typography>
          </Box>
        </Box>
      </Paper>

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
