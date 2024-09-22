import React from "react";
import { Box, Button, Divider, Paper, Radio, Typography } from "@mui/material";

interface PlanCardProps {
  checked: boolean;
  value: string;
  title: string;
  subtitle: string;
  price: number;
  handleChange: (value: boolean) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({
  checked,
  value,
  title,
  subtitle,
  price,
  handleChange,
}) => {
  return (
    <Paper elevation={3} sx={{ bgcolor: "secondary.main" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
          gap: 1,
          p: 2,
        }}
      >
        <Radio
          checked={checked}
          onChange={(event) => handleChange(event.target.checked)}
          value={value}
          name="radio-buttons"
          inputProps={{ "aria-label": "A" }}
        />
        <Box>
          <Typography variant="subtitle1" component="h2">
            {title}
          </Typography>
          <Typography variant="caption" color="secondary.text">
            {subtitle}
          </Typography>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box sx={{ flexGrow: 1 }} />
        <Typography variant="body2" color="primary">
          ${price} / mes
        </Typography>
      </Box>
    </Paper>
  );
};

export default PlanCard;
