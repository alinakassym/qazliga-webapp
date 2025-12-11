// qazliga/src/theme/index.ts

import { createTheme, type PaletteMode } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    tertiary: Palette['primary'];
    gradient: string[];
    cardBorder: string;
    surface: string;
    appBackground: string;
    dark: string;
  }
  interface PaletteOptions {
    tertiary?: PaletteOptions['primary'];
    gradient?: string[];
    cardBorder?: string;
    surface?: string;
    appBackground?: string;
    dark?: string;
  }
}

export const createAppTheme = (mode: PaletteMode = 'light') => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#5060D8',
      },
      secondary: {
        main: '#8450D8',
      },
      tertiary: {
        main: '#50A4D8',
      },
      gradient: ['#5060D8', '#5060D8', '#8450D8', '#8450D8', '#7BB02A', '#50A4D8'],
      success: {
        main: mode === 'light' ? '#16A34A' : '#34D399',
      },
      cardBorder: mode === 'light' ? '#EDF2F8' : '#1D1527',
      surface: mode === 'light' ? '#EAECFA' : '#1D1527',
      appBackground: mode === 'light' ? '#F9FAFE' : 'rgba(39, 27, 56, 1)',
      dark: '#271B38',
    },
    shape: {
      borderRadius: 8,
    },
    typography: {
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            padding: '14px',
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
            '&:active': {
              boxShadow: 'none',
            },
          },
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: {
            '& .MuiOutlinedInput-root': {
              borderRadius: 8,
            },
          },
        },
      },
    },
  });
};

export const lightTheme = createAppTheme('light');
export const darkTheme = createAppTheme('dark');
