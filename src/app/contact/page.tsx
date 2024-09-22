import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  TextField,
  Paper,
} from "@mui/material";
import { Send } from "@mui/icons-material";
import Image from "next/image";

const ContactPage = () => {
  return (
    <Box sx={{ mt: 2, mb: 4 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Contáctenos
        </Typography>
        <Typography variant="body2" component="h2" align="center" gutterBottom>
          No pierdas la oportunidad de gestionar los gastos comunitarios de tu
          urbanización
        </Typography>
        <Box sx={{ m: 2, display: "flex", justifyContent: "center" }}>
          <Image
            src="/assets/team_chat.svg"
            width={200}
            height={200}
            alt="Contacto"
          />
        </Box>
        <form>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              id="name"
              name="name"
              label="Nombre"
              variant="outlined"
              size="small"
              required
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Correo Electrónico"
              type="email"
              variant="outlined"
              size="small"
              required
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <TextField
              fullWidth
              id="message"
              name="message"
              label="Mensaje"
              multiline
              rows={4}
              variant="outlined"
              size="small"
              required
            />
          </Box>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            startIcon={<Send />}
          >
            Enviar Mensaje
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default ContactPage;
