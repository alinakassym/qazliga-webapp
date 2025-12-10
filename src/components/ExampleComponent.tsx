import type { FC } from 'react';
import { Button, Box } from '@mui/material';

interface ExampleComponentProps {
  title: string;
  onClick?: () => void;
}

const ExampleComponent: FC<ExampleComponentProps> = ({ title, onClick }) => {
  return (
    <Box sx={{ p: 2 }}>
      <Button variant="contained" onClick={onClick} fullWidth>
        {title}
      </Button>
    </Box>
  );
};

export default ExampleComponent;
