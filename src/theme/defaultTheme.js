import { createMuiTheme } from "@material-ui/core/styles";

const defaultTheme = createMuiTheme({
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 500
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 400
    }
  }
});

export default defaultTheme;
