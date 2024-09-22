import { Box, IconButton, Typography } from "@mui/material";
import React from "react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  direction?: "row" | "column";
}

const Feature: React.FC<FeatureProps> = React.memo(({ icon, title, description, direction }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: direction || "row",
        alignItems: "center",
        justifyContent: "flex-start",
        borderRadius: 1,
        marginBottom: 2,
      }}
    >
      <IconButton sx={{ marginRight: 2 }} color="primary">{icon}</IconButton>
      <Box sx={{ flexDirection: "column" }}>
        <Typography variant="h6" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {description}
        </Typography>
      </Box>
    </Box>
  );
});

export default Feature;
