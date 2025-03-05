import React from "react";
import { Container, Typography, Grid, Card, CardContent } from "@mui/material";

const About = () => {
  return (
    <Container maxWidth="lg" sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h3" fontWeight="bold" sx={{ mb: 3 }}>
        About Our Gallery App
      </Typography>
      <Typography variant="h6" color="textSecondary" sx={{ mb: 5 }}>
        We created this app to make image management simple, fast, and accessible.
      </Typography>

      {/* Mission & Vision Section */}
      <Grid container spacing={3}>
        {[
          { title: "Our Mission", desc: "To provide a seamless image-sharing experience." },
          { title: "Our Vision", desc: "To be the go-to platform for image management." },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography color="textSecondary">{item.desc}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default About;
