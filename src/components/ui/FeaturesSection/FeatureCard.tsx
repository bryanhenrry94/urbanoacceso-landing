import React from "react";
import { Paper, Typography, Box, IconButton } from "@mui/material";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  content: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  subtitle,
  content,
}) => {
  return (
    <>
      <Paper
        elevation={1}
        sx={{ p: 2, height: 200, bgcolor: "background.default" }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <IconButton color="primary">{icon}</IconButton>
          <Typography variant="h6">
            <strong>{title}</strong>
          </Typography>
          <Typography variant="caption">{subtitle}</Typography>
          <Typography variant="body2">{content}</Typography>
        </Box>
      </Paper>
    </>
  );
};

export default FeatureCard;
