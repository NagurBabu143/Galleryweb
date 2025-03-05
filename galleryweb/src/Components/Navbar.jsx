import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Switch } from "@mui/material";

const Navbar = ({ setActivePage, toggleTheme, darkMode }) => {
  const [active, setActive] = useState("Home");

  const handleClick = (page) => {
    setActive(page);
    setActivePage(page);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          My Gallery App
        </Typography>
        {["Home", "Gallery", "About", "Contact"].map((page) => (
          <Button
            key={page}
            color="inherit"
            onClick={() => handleClick(page)}
            style={{
              fontWeight: active === page ? "bold" : "normal",
              textDecoration: active === page ? "underline" : "none",
            }}
          >
            {page}
          </Button>
        ))}
        <Switch checked={darkMode} onChange={toggleTheme} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
