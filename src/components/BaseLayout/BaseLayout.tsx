import { Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import Login from "../../pages/Login/Login";
import { IsMobile } from "../../utils/display";
import SideBar from "../SideBar/SideBar";

interface IBaseLayout {
  children: React.ReactNode;
}

const useStyles = makeStyles(() => ({
  layout: {
    background: useTheme().modeTheme === "dark" ? "#000000d6" : "#f1f1f1",
    width: "100vw",
    height: "100vh",
  },
}));

const BaseLayout: React.FC<IBaseLayout> = ({ children }) => {
  const classes = useStyles();
  const location = useLocation();

  return (
    <Stack className={classes.layout}>
      <Stack direction="row" height="100%">
        {IsMobile() ? (
          location.pathname === "/" || location.pathname === "/home" ? (
            <SideBar />
          ) : (
            <React.Fragment>{children}</React.Fragment>
          )
        ) : (
          <React.Fragment>
            <SideBar />
            {/* <Login /> */}
            {children}
          </React.Fragment>
        )}
      </Stack>
    </Stack>
  );
};

export default BaseLayout;
