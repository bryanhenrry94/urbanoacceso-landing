import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid2 as Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Feature from "./Feature";

import { People, Security, Paid, Assessment } from "@mui/icons-material";

const FeatureAppSection = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 5,
          mb: 5,
        }}
      >
        <Typography variant="h4">¿Cómo Funciona?</Typography>
        <Typography variant="body2" color="textSecondary" sx={{ m: 2 }}>
          Esta app funciona mediante una combinación de React, Next.js y
          Material-UI.
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Feature 1 */}
        <Grid container spacing={2} sx={{ m: 2 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={"/images/features/admin-dashboard.png"}
                alt=""
                width={500}
                height={500}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                height: "100%",
              }}
            >
              <Feature
                icon={<People />}
                title="Administrar Residentes"
                description="Administra los regidentes de tu edificio de manera sencilla y rápida."
              />
              <Feature
                icon={<Paid />}
                title="Gestiona Cobros"
                description="Administra los cobros de tu edificio de manera sencilla y rápida."
              />
              <Feature
                icon={<Security />}
                title="Seguridad y Accesos"
                description="Administra los accesos de tu edificio de manera sencilla y rápida."
              />
            </Box>
          </Grid>
        </Grid>
        {/* Feature 2 */}
        <Grid container spacing={2} sx={{ m: 2 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                textAlign: "center",
              }}
            >
              <Feature
                icon={<Assessment />}
                direction="column"
                title="Diseño Responsivo y Moderno"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque."
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={"/images/features/admin-responsive.png"}
                alt=""
                width={400}
                height={400}
              />
            </Box>
          </Grid>
        </Grid>
        {/* Feature 3 */}
        <Grid container spacing={2} sx={{ m: 2 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src={"/images/features/admin-reports.png"}
                alt=""
                width={500}
                height={500}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                textAlign: "center",
              }}
            >
              <Feature
                icon={<Assessment />}
                direction="column"
                title="Administra Toda Tu Información"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque."
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default FeatureAppSection;
