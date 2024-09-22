import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

const BuildingSection: React.FC = () => {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          m:5
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom>
          Construyendo un futuro mejor
        </Typography>
        <Typography variant="body2" color="textSecondary" align="center">
          Nuestro objetivo es mejorar la calidad de vida de las personas a través de la tecnología.
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", p: 5 }}>
          <Image
            src="/assets/building.svg"
            alt="Building"
            width={500}
            height={300}
          />
          </Box>
      </Box>
    </Container>
  );
};

export default BuildingSection;
