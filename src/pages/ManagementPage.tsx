import type { FC } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import { ManagementHeader } from '@/components';
import { getTelegramWebApp } from '@/utils/telegram';

const ManagementPage: FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const webApp = getTelegramWebApp();
    if (!webApp) return;

    const handleBack = () => {
      navigate(-1);
    };

    // Показываем кнопку BackButton
    webApp.BackButton.show();
    webApp.BackButton.onClick(handleBack);

    return () => {
      webApp.BackButton.offClick(handleBack);
      webApp.BackButton.hide();
    };
  }, [navigate]);

  return (
    <>
      <ManagementHeader />
      <Box
        sx={{
          pb: 2,
          width: '100%',
          height: 'calc(100vh - 80px)',
          overflow: 'hidden',
        }}
      >
        <iframe
          src="https://llf-webview.vercel.app/login"
          title="Management"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
        />
      </Box>
    </>
  );
};

export default ManagementPage;
