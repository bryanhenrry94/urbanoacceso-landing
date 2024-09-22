import React from "react";

import { Grid2 as Grid, Container, Box, Typography } from "@mui/material";
import FeatureCard from "./FeatureCard";
import features from "./features";

const FeaturesSection: React.FC = () => {
  return (
    <Container>
      <Typography variant="h4" align="center" sx={{ mt: 4, mb: 4 }}>
        Características
      </Typography>
      <Typography variant="body1" align="center" sx={{ mb: 4 }}>
        Descubre todas las características que UrbanoAcceso tiene para
        ofrecerte.
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Grid container spacing={2}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 6 }} key={index}>
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                subtitle={feature.subtitle}
                content={feature.content}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default FeaturesSection;
