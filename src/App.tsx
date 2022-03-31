import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseLayout from "./components/BaseLayout/BaseLayout";
import { useTheme } from "./contexts/ThemeContext";
import RenderRoutes from "./routes/RenderRoutes";
import { colors } from "./utils/colors";
import { IsMobile } from "./utils/display";

function App() {
  const themeContext = useTheme();
  const theme = createTheme({
    palette: {
      mode: themeContext.modeTheme,
    },
    typography: {
      h3: {
        fontSize: "2.5rem",
        fontWeight: 600
      },
      h6: {
        fontSize: "1.2rem",
      },
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
      <Router>
        <BaseLayout>
          <RenderRoutes />
        </BaseLayout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
