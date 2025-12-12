import type { FC } from 'react';
import { Box } from '@mui/material';

const ManagementPage: FC = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
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
  );
};

export default ManagementPage;
