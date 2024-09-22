import React from "react";
import {
  Container,
  Grid2 as Grid,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import Link from "next/link";
import { ShoppingCart } from "@mui/icons-material";

import items from "./items";

const PlansSection = () => {
  return (
    <Container>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Nuestros Planes
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          component="p"
          align="center"
          gutterBottom
        >
          Elige el plan que mejor se adapte a tus necesidades
        </Typography>
        <Grid container justifyContent="center" sx={{ mt: 2 }}>
          <Grid container spacing={5}>
            {items.map((plan, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    bgcolor: "background.default",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" component="h2" gutterBottom>
                      {plan.name}
                    </Typography>
                    <ul>
                      {plan.features.map((feature, i) => (
                        <li key={i}>
                          <Typography variant="body2" color="textSecondary">
                            * {feature}
                          </Typography>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardActions sx={{ backgroundColor: "secondary.main" }}>
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography variant="h6" component="p">
                        ${plan.price}
                        <Typography variant="body2" component="span">
                          /mes
                        </Typography>
                      </Typography>
                      {plan.old_price && (
                        <Typography
                          variant="body2"
                          component="span"
                          sx={{
                            textDecoration: "line-through",
                            color: "text.secondary",
                          }}
                        >
                          ${plan.old_price} ({plan.discount_percentage}% de
                          descuento)
                        </Typography>
                      )}
                    </Box>
                    <Link href="/start" passHref>
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        startIcon={<ShoppingCart />}
                      >
                        Obtener
                      </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default PlansSection;
