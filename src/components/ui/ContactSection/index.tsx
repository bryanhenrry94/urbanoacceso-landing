"use client";
import React from "react";
import {
  Box,
  Button,
  IconButton,
  Container,
  Grid2 as Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { Send, Call, WhatsApp, Email } from "@mui/icons-material";
import { useRouter } from "next/navigation";

const ContactSection = () => {
  const router = useRouter();

  const handleReservarAsesoria = () => {
    router.push("/contact");
  };

  return (
    <Container>
      <Box
        sx={{
          bgcolor: "secondary.main",
          borderRadius: 2,
          alignContent: "center",
          mb: 4,
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography variant="h4" align="center" sx={{ m: 2 }}>
              Contactanos
            </Typography>
            <Typography
              variant="body1"
              color="textSecondary"
              align="center"
              sx={{ m: 2 }}
            >
              ¡Ponte en contacto para preguntarnos cualquier cosa, ya sea de
              ventas o de otro tipo!. Te asesoramos sin costo vía{" "}
              <strong>Google Meet</strong>
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                startIcon={<Email />}
                onClick={handleReservarAsesoria}
              >
                Reservar asesoría
              </Button>
            </Box>
            <Stack
              direction="row"
              spacing={5}
              sx={{ mt: 2, justifyContent: "center" }}
            >
              <IconButton color="primary">
                <WhatsApp />
              </IconButton>
              <IconButton color="primary">
                <Call />
              </IconButton>
              <IconButton color="primary">
                <Send />
              </IconButton>
            </Stack>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Image
              src="/assets/contact_us.svg"
              alt="Contacto"
              width={400}
              height={250}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ContactSection;
