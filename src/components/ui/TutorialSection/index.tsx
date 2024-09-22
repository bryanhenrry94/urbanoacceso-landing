import React from "react";
import { Container, Box, Typography, Grid2 as Grid } from "@mui/material";
import Image from "next/image";

const TutorialSection: React.FC = () => {
  return (
    <Container>
      <Box
        sx={{
          bgcolor: "secondary.main",
          textAlign: "center",
          mt: 5,
          p: 2,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4">Video Tutoriales</Typography>
        <Typography variant="body1" color="textSecondary">
          Aprende a usar nuestra aplicación con estos tutoriales.
        </Typography>
        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Image
                src="/assets/youtube_tutorial.svg"
                alt="Tutorial"
                width={300}
                height={250}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <iframe
                width="300"
                height="250"
                src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=p0OH206z9Wg"
                title="UrbanoAcceso Product Video"
                style={{ border: 0 }}
                allow="autoplay; encrypted-media"
                allowFullScreen
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default TutorialSection;
