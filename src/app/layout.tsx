"use client";

import "./globals.css";

import Footer from "@/components/layouts/Footer";
import HeaderComponent from "@/components/layouts/Header";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '@/theme'; // Asegúrate de que la ruta sea correcta

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <HeaderComponent />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}