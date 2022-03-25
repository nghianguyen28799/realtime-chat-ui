import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import BaseLayout from "./components/BaseLayout/BaseLayout";
import RenderRoutes from "./routes/RenderRoutes/RenderRoutes";
import { colors } from "./utils/colors";

const theme = createTheme({
  palette: {
    mode: "light"
  },
  typography: {
    body2: {
      fontSize: "0.85rem",
      fontWeight: 600,
      color: colors.textGrey
    },
    subtitle2: {
      fontWeight: 600,
    },
    button: {
      textTransform: "inherit",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BaseLayout>
        <RenderRoutes />
      </BaseLayout>
    </ThemeProvider>
  );
}

export default App;
