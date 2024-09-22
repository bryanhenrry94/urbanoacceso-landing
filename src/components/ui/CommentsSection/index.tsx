import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardContent,
  CardHeader,
  Grid2 as Grid,
  Rating,
  Avatar,
} from "@mui/material";
import comments from "./comments";

const CommentsSection: React.FC = () => {
  return (
    <Container>
      <Box sx={{ mt: 10 }}>
        <Typography variant="h4" align="center" sx={{ m: 2 }}>
          Comentarios de Nuestros Clientes
        </Typography>
        <Typography
          variant="body1"
          color="textSecondary"
          align="center"
          sx={{ m: 2 }}
        >
          Conoce lo que dicen de nosotros nuestros clientes satisfechos.
        </Typography>
        <Grid container spacing={2} sx={{ overflowX: "auto", pb: 4 }}>
          {comments.map((review, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Card
                sx={{
                  minWidth: 275,
                  height: 150,
                  bgcolor: "background.default",
                }}
              >
                <CardHeader
                  avatar={<Avatar aria-label="recipe" />}
                  title={review.name}
                  subheader={review.role}
                  titleTypographyProps={{ variant: "h6", color: "primary" }}
                />
                <CardContent>
                  {/* <Rating value={review.rating} readOnly /> */}
                  <Typography variant="body2" color="textSecondary">
                    {review.comment}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default CommentsSection;
