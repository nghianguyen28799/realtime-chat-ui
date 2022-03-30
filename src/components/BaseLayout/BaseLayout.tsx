import { Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import MessagesPage from "../../pages/MessagesPage/MessagesPage";
import { IsMobile } from "../../utils/display";
import SideBar from "../SideBar/SideBar";

const useStyles = makeStyles(() => ({
  layout: {
    background: useTheme().modeTheme === "dark" ? "#000000d6" : "#f1f1f1",
    width: "100vw",
    height: "100vh",
  },
}));

const BaseLayout = () => {
  const classes = useStyles();
  const [isActiveId, setActiveId] = React.useState<string>("");
  const handleChangeActive = (id: string) => {
    setActiveId(id);
  };

  return (
    <Stack className={classes.layout}>
      <Stack direction="row" height="100%">
        {IsMobile() && !!isActiveId === false ? (
          <SideBar activeId={isActiveId} handleChangeActive={handleChangeActive} />
        ) : (
          <></>
        )}
        {IsMobile() && !!isActiveId === true ? (
          <MessagesPage activeId={isActiveId as string} handleChangeActive={handleChangeActive} />
        ) : (
          <></>
        )}
        {!IsMobile() ? (
          <React.Fragment>
            <SideBar activeId={isActiveId} handleChangeActive={handleChangeActive} />
            <MessagesPage activeId={isActiveId as string} handleChangeActive={handleChangeActive} />
          </React.Fragment>
        ) : (
          <></>
        )}
        {/* <RenderRoutes /> */}
      </Stack>
    </Stack>
  );
};

export default BaseLayout;
