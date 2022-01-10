import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF6464",
      contrastText: "#fff",
    },
    secondary: {
      main: "#00A8CC",
    },
  },
  typography: {
    fontFamily: "Heebo",
  },
});

export default theme;
