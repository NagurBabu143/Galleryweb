import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Gallery from "./Components/Gallery";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import "./styles.css"

function App() {
  const [activePage, setActivePage] = useState("Home");
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const renderPage = () => {
    switch (activePage) {
      case "Gallery":
        return <Gallery />;
      case "About":
        return <About/>;
      case "Contact":
        return <Contact/>;
      default:
        return <Home />;
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar setActivePage={setActivePage} toggleTheme={() => setDarkMode(!darkMode)} darkMode={darkMode} />
      {renderPage()}
    </ThemeProvider>
  );
}

export default App;
