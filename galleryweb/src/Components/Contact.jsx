import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Card,
  CardContent,
} from "@mui/material";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <Container maxWidth="md" sx={{ textAlign: "center", mt: 4 }}>
      <Typography variant="h3" fontWeight="bold" sx={{ mb: 3 }}>
        Contact Us
      </Typography>
      <Typography variant="h6" color="textSecondary" sx={{ mb: 5 }}>
        Have questions? We'd love to hear from you.
      </Typography>

      <Grid container spacing={3}>
        {/* Contact Form */}
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  variant="outlined"
                  margin="dense"
                  value={form.name}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  variant="outlined"
                  margin="dense"
                  value={form.email}
                  onChange={handleChange}
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  variant="outlined"
                  margin="dense"
                  multiline
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                />
                <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </Grid>

        {/* Contact Info */}
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" fontWeight="bold">
                Contact Details
              </Typography>
              <Typography color="textSecondary">
                📍 Location: 123 Main St, City
              </Typography>
              <Typography color="textSecondary">
                📞 Phone: +1 234 567 890
              </Typography>
              <Typography color="textSecondary">
                📧 Email: support@galleryapp.com
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <iframe
        title="Google Maps Location"
        src="https://maps.google.com/maps?q=New+York&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="300"
        style={{ marginTop: "30px", border: "0" }}
        allowFullScreen
        loading="lazy"
      ></iframe>
    </Container>
  );
};

export default Contact;
