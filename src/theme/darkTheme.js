import { createMuiTheme } from "@material-ui/core/styles";

const darkTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#90caf9"
    },
    secondary: {
      main: "#f48fb1"
    }
  },
  typography: {
    h1: {
      fontSize: "1.3rem",
      fontWeight: 600
    },
    h2: {
      fontSize: "1.1rem",
      fontWeight: 400
    },
    fontFamily: "sans-serif",
    fontStyle: "italic"
  }
});

export default darkTheme;
