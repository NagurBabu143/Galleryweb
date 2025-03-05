import React, { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Card,
  CardMedia,
  CardActions,
  Dialog,
  DialogContent,
  TextField,
} from "@mui/material";

const Gallery = () => {
  const [images, setImages] = useState(() => {
    return JSON.parse(localStorage.getItem("galleryImages")) || [];
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    localStorage.setItem("galleryImages", JSON.stringify(images));
  }, [images]);

  const handleImageUpload = (event) => {
    const files = event.target.files;
    const newImages = [...images];

    for (let i = 0; i < files.length; i++) {
      newImages.push(URL.createObjectURL(files[i]));
    }

    setImages(newImages);
  };

  const handleDeleteImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    const newImages = [...images];

    for (let i = 0; i < files.length; i++) {
      newImages.push(URL.createObjectURL(files[i]));
    }

    setImages(newImages);
  };

  const filteredImages = images.filter((img) =>
    img.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <input
        accept="image/*"
        style={{ display: "none" }}
        id="upload-image"
        multiple
        type="file"
        onChange={handleImageUpload}
      />
      <label htmlFor="upload-image">
        <Button variant="contained" component="span">
          Upload Images
        </Button>
      </label>

      <div
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        style={{
          border: "2px dashed gray",
          padding: "20px",
          margin: "20px auto",
          width: "50%",
        }}
      >
        Drag & Drop Images Here
      </div>

      <TextField
        label="Search Images"
        variant="outlined"
        fullWidth
        sx={{ marginBottom: "20px" }}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <Grid container spacing={2}>
        {filteredImages.map((image, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={image}
                alt={`Uploaded ${index}`}
                onClick={() => setSelectedImage(image)}
              />
              <CardActions>
                <Button color="error" onClick={() => handleDeleteImage(index)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={Boolean(selectedImage)} onClose={() => setSelectedImage(null)}>
        <DialogContent>
          {selectedImage && <img src={selectedImage} alt="Preview" style={{ width: "100%" }} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
