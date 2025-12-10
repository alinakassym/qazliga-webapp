import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    telegram: {
      bg: string;
      text: string;
      hint: string;
      link: string;
      button: string;
      buttonText: string;
      secondaryBg: string;
    };
  }
  interface PaletteOptions {
    telegram?: {
      bg?: string;
      text?: string;
      hint?: string;
      link?: string;
      button?: string;
      buttonText?: string;
      secondaryBg?: string;
    };
  }
}

export const createAppTheme = (colorScheme: 'light' | 'dark' = 'light') => {
  const telegramColors = {
    bg: colorScheme === 'light' ? '#ffffff' : '#212121',
    text: colorScheme === 'light' ? '#000000' : '#ffffff',
    hint: colorScheme === 'light' ? '#999999' : '#aaaaaa',
    link: colorScheme === 'light' ? '#2481cc' : '#62bcf9',
    button: colorScheme === 'light' ? '#2481cc' : '#62bcf9',
    buttonText: colorScheme === 'light' ? '#ffffff' : '#ffffff',
    secondaryBg: colorScheme === 'light' ? '#f4f4f5' : '#0f0f0f',
  };

  return createTheme({
    palette: {
      mode: colorScheme,
      primary: {
        main: telegramColors.button,
      },
      background: {
        default: telegramColors.bg,
        paper: telegramColors.secondaryBg,
      },
      text: {
        primary: telegramColors.text,
        secondary: telegramColors.hint,
      },
      telegram: telegramColors,
    },
    typography: {
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            borderRadius: '12px',
          },
        },
      },
    },
  });
};

export const lightTheme = createAppTheme('light');
export const darkTheme = createAppTheme('dark');
