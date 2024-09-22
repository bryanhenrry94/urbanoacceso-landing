"use client";

import React from "react";

import {
  Container,
  Grid2 as Grid,
  Typography,
  Box,
  Stack,
  Button,
} from "@mui/material";
import { TouchApp, Mail } from "@mui/icons-material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import items from "./items";

interface StartedSectionProps {
  title: string;
  subtitle: string;
}

const StartedSection: React.FC<StartedSectionProps> = ({ title, subtitle }) => {
  const router = useRouter();

  const handleClicOpcion = (ruta: string) => {
    router.push(ruta);
  };

  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
      }}
    >
      <Container
        sx={{
          p: { xs: 5, md: 2 },
        }}
      >
        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <Typography variant="h4">{title}</Typography>
              <Typography variant="body1">{subtitle}</Typography>
              <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                <Button
                  color="primary"
                  variant="contained"
                  onClick={() => handleClicOpcion("/start")}
                  startIcon={<TouchApp />}
                >
                  Comenzar
                </Button>
                <Button
                  color="primary"
                  variant="outlined"
                  onClick={() => handleClicOpcion("/contact")}
                  startIcon={<Mail />}
                >
                  Contactar
                </Button>
              </Stack>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Image
              src="/images/features/admin-dashboard.png"
              alt="Started"
              width={600}
              height={600}
            />
          </Grid>
          {/* <Grid size={{ xs: 12, md: 6 }}>
            <ImageList
              sx={{ width: 500, height: 450 }}
              variant="woven"
              cols={3}
              gap={8}
            >
              {items.map((item) => (
                <ImageListItem key={item.img}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    width={200}
                    height={200}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid> */}
        </Grid>
      </Container>
    </Box>
  );
};

export default StartedSection;
