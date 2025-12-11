import { useEffect, useMemo } from 'react';
import type { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { Box } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { createAppTheme } from '@/theme';
import { getTelegramWebApp, getTelegramColorScheme } from '@/utils/telegram';
import { Header, BottomNavigation } from '@/components';
import HomePage from '@/pages/HomePage';
import LeaguesPage from '@/pages/LeaguesPage';
import RatingPage from '@/pages/RatingPage';
import ProfilePage from '@/pages/ProfilePage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 5 * 60 * 1000,
    },
  },
});

const App: FC = () => {
  const colorScheme = getTelegramColorScheme();
  const theme = useMemo(() => createAppTheme(colorScheme), [colorScheme]);

  useEffect(() => {
    const webApp = getTelegramWebApp();
    if (webApp) {
      webApp.ready();
      webApp.expand();
      webApp.requestFullscreen();
    }
  }, []);

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
              <Header />
              <Box component="main" sx={{ flexGrow: 1, pb: 7 }}>
                <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/leagues" element={<LeaguesPage />} />
                  <Route path="/rating" element={<RatingPage />} />
                  <Route path="/profile" element={<ProfilePage />} />
                </Routes>
              </Box>
              <BottomNavigation />
            </Box>
          </Router>
        </ThemeProvider>
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
