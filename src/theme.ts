// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4A6F22',
      light: '#6B9E32',
      dark: '#3A5A1A',
    },
    secondary: {
      main: '#F0F4EA',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
    background: {
      default: '#FFFFFF',
      paper: '#F5F5F5',
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
  },
  transitions: {
    duration: {
      standard: 300,
    },
  },
});

export default theme;