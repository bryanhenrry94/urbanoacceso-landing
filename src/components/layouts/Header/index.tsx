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
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Divider,
} from "@mui/material";
import {
  Menu,
  Home,
  Contacts,
  Login,
  AccountBox,
  Inbox,
  Mail,
} from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";

const HeaderComponent = () => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  const handleClicOpcion = (ruta: string) => {
    router.push(ruta);
  };

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleClicStart = () => {
    router.push("/start");
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Inicio", "Contacto"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["Ingresar", "Registrar"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <Inbox /> : <Mail />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar position="static" color="inherit">
        <Toolbar variant="dense">
          <IconButton onClick={toggleDrawer(true)}>
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
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer(false)}
        // sx={{ width: { md: 350, xs: 300 } }}
      >
        {DrawerList}
      </Drawer>
    </Box>
  );
};

export default HeaderComponent;
