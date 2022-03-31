import { Paper, Stack } from "@mui/material";
import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { IsMobile } from "../../utils/display";
import { size } from "../../utils/proportion";
import FeatureMessage from "../FeatureMessage/FeatureMessage";
import SidebarHeader from "../Header/SidebarHeader";

const data = [
  {
    id: "1",
    name: "James Aaron",
    message: "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello",
    timestamp: new Date(),
    avatar: "J",
    waitingMessages: 2,
  },
  {
    id: "2",
    name: "James Aaron",
    message: "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello",
    timestamp: new Date(),
    avatar: "J",
    waitingMessages: 2,
  },
  {
    id: "3",
    name: "James Aaron",
    message: "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello",
    timestamp: new Date(),
    avatar: "J",
    waitingMessages: 0,
  },
];

const SideBar = () => {
  const themeContext = useTheme();
  const [isGroupOpened, setGroupOpened] = React.useState<boolean>(true);
  const [isAllOpened, setAllOpened] = React.useState<boolean>(true);
  
  const handleChangeGroup = () => {
    setGroupOpened((prev) => !prev);
  };

  const handleChangeAll = () => {
    setAllOpened((prev) => !prev);
  };

  return (
    <Stack direction="column">
      <SidebarHeader />
      <Paper
        elevation={themeContext.modeTheme === "dark" ? 1 : 0}
        sx={{
          width: IsMobile() ? "100vw" : size.sideBarWidth,
          overflowY: "auto",
          overflowX: "hidden",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          mt: "1px",
          px: IsMobile() ? 1 : 4,
          py: IsMobile() ? 1 : 2,
        }}
      >
        <FeatureMessage
          type="group"
          opened={isGroupOpened}
          handleChange={handleChangeGroup}
          data={data}
        />
        <FeatureMessage type="all" opened={isAllOpened} handleChange={handleChangeAll} />
      </Paper>
    </Stack>
  );
};

export default SideBar;
