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

interface ISideBar {
  activeId: string;
  handleChangeActive: (id: string) => void;
}

const SideBar: React.FC<ISideBar> = (props) => {
  const { activeId, handleChangeActive } = props;
  const themeContext = useTheme();
  const [isGroupOpened, setGroupOpened] = React.useState<boolean>(false);
  const [isAllOpened, setAllOpened] = React.useState<boolean>(false);

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
          activeId={activeId}
          handleChangeActive={handleChangeActive}
        />
        <FeatureMessage
          type="all"
          opened={isAllOpened}
          handleChange={handleChangeAll}
          activeId={activeId}
          handleChangeActive={handleChangeActive}
        />
      </Paper>
    </Stack>
  );
};

export default SideBar;
