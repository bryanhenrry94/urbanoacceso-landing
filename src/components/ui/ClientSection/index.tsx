import React from "react";
import { Box, Container, Divider, Typography } from "@mui/material";
import Image from "next/image";
import clients from "./clients";

const ClientSection: React.FC = () => {
  return (
    <Box
      sx={{
        mt: 5,
        mb: 5,
      }}
    >
      <Container>
        <Typography variant="h6" align="center" sx={{ m: 2 }}>
          Nuestros Clientes
        </Typography>
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          {clients.map((client, index) => (
            <Image
              key={index}
              src={client.image}
              alt={client.name}
              width={75}
              height={75}
            />
          ))}
        </Box>
        <Divider />
      </Container>
    </Box>
  );
};

export default ClientSection;
