import { Box, Grid2 as Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import FormAccount from "./FormAccount";

const StartPage: React.FC = () => {
  return (
    <Box sx={{ mt: 2 }}>
      <Grid container spacing={0}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box
            sx={{
              p: 2,
              bgcolor: "background.default",
              width: "100%",
              height: "100%",
            }}
          >
            <Typography variant="h5">Registrar Cuenta</Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                src="/assets/urbanoacceso_logo.svg"
                width={50}
                height={50}
                alt="Urbano Acceso"
              />
              <Typography variant="h6">Urbano Acceso</Typography>
            </Box>
            <FormAccount />
          </Box>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Box sx={{ p: 2, display: "flex", justifyContent: "center" }}>
            <Image
              src="/assets/building_website.svg"
              width={900}
              height={900}
              alt="Building"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StartPage;
