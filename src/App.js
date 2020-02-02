import React, { useContext, useEffect } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import CustomBar from "./components/CustomBar";
import DemoContents from "./components/DemoContents";
import { ThemeContext } from "./theme/themeContext";

const App = () => {
  const context = useContext(ThemeContext);
  useEffect(() => {
    const themeName = localStorage.getItem("theme");
    if (themeName !== null) {
      context.handleThemeChange(themeName);
    }
  }, [context]);

  return (
    <ThemeProvider theme={context.theme}>
      <CssBaseline />
      <CustomBar />
      <Container maxWidth="sm">
        <DemoContents />
      </Container>
    </ThemeProvider>
  );
};

export default App;
