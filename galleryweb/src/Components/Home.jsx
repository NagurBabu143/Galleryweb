import React from "react";
import { Container, Typography } from "@mui/material";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 5 }}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Typography variant="h3" fontWeight="bold">
          Welcome to KHKR Innovators Tech
        </Typography>
        <Typography variant="h6" color="textSecondary" sx={{ mt: 2 }}>
          We specialize in cutting-edge technology solutions, including software development, digital marketing, and more.
        </Typography>
      </motion.div>
    </Container>
  );
};

export default Home;
