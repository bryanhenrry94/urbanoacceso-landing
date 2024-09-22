"use client";
import React from "react";
import {
  AppBar,
  Button,
  Stack,
  Toolbar,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { Menu, Home, Contacts, Login, AccountBox } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HeaderComponent = () => {
  const router = useRouter();

  const handleClicOpcion = (ruta: string) => {
    router.push(ruta);
  };

  const handleClicStart = () => {
    router.push("/start");
  };

  return (
    <AppBar position="static" color="inherit">
      <Toolbar variant="dense">
        <IconButton>
          <Menu />
        </IconButton>
        <Link href="/" style={{ flexGrow: 1 }}>
          <Typography variant="h6">
            <strong>Urbano Acceso</strong>
          </Typography>
        </Link>
        <Box sx={{ display: { xs: "none", md: "block" } }}>
          <Stack direction="row" spacing={2}>
            <Button
              color="primary"
              variant="text"
              onClick={() => handleClicOpcion("/")}
              startIcon={<Home />}
            >
              Inicio
            </Button>
            <Button
              color="primary"
              variant="text"
              onClick={() => handleClicOpcion("/contact")}
              startIcon={<Contacts />}
            >
              Contacto
            </Button>
            <Button color="primary" variant="contained" startIcon={<Login />}>
              Ingresar
            </Button>
            <Button
              color="primary"
              variant="outlined"
              startIcon={<AccountBox />}
              onClick={handleClicStart}
            >
              Registrar
            </Button>
          </Stack>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderComponent;
