import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import BaseLayout from "./components/BaseLayout/BaseLayout";
import { useTheme } from "./contexts/ThemeContext";
import { colors } from "./utils/colors";
import { IsMobile } from "./utils/display";

function App() {
  const themeContext = useTheme();
  const theme = createTheme({
    palette: {
      mode: themeContext.modeTheme,
    },
    typography: {
      body1: {
        fontSize: IsMobile() ? "0.7rem" : "0.85rem",
      },
      body2: {
        fontSize: IsMobile() ? "0.7rem" : "0.85rem",
        fontWeight: 600,
        color: colors.textGrey,
      },
      subtitle2: {
        fontSize: IsMobile() ? "0.7rem" : "0.85rem",
        fontWeight: 600,
      },
      button: {
        textTransform: "inherit",
      },
    },
  });

  
  return (
    <ThemeProvider theme={theme}>
      <BaseLayout />
    </ThemeProvider>
  );
}

export default App;
