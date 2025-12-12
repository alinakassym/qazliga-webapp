import type { FC } from 'react';
import { Box } from '@mui/material';
import { ManagementHeader } from '@/components';

const ManagementPage: FC = () => {
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
