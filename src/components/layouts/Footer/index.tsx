import React from "react";
import {
  Box,
  Typography,
  Stack,
  IconButton,
  Grid2 as Grid,
  Container,
} from "@mui/material";
import { Instagram, Facebook, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        textAlign: "center",
        py: 2,
      }}
    >
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" align="center" sx={{ mb: 1 }}>
              Información de Contacto
            </Typography>
            <Typography variant="body2" align="left" sx={{ mb: 1 }}>
              Tel: 123456789
            </Typography>
            <Typography variant="body2" align="left" sx={{ mb: 1 }}>
              Dirección: Av. Siempre Viva 123
            </Typography>
            <Typography variant="body2" align="left" sx={{ mb: 1 }}>
              Email: info@urbanoacceso.com
            </Typography>
            <Typography variant="body2" align="left" sx={{ mb: 1 }}>
              Horario: Lunes a Viernes de 8:00 a 18:00
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h6" align="center" sx={{ mb: 1 }}>
              Síguenos
            </Typography>
            <Typography variant="body2" align="center" sx={{ mb: 1 }}>
              Síguenos en nuestras redes sociales para estar al tanto de nuevas
              noticias y actualizaciones.
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{ justifyContent: "center" }}
            >
              <IconButton color="secondary">
                <Instagram />
              </IconButton>
              <IconButton color="secondary">
                <Facebook />
              </IconButton>
              <IconButton color="secondary">
                <YouTube />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
        <Typography variant="body2" sx={{ mt: 2 }}>
          &copy; 2024 UrbanoAcceso. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
