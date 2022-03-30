import {
  Avatar,
  Box,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Stack,
  Theme,
  Typography,
} from "@mui/material";
import React from "react";
import { colors } from "../../utils/colors";
import { makeStyles } from "@mui/styles";
import { useTheme } from "../../contexts/ThemeContext";

export interface IConversation {
  id: string;
  name: string;
  message: string;
  timestamp: Date;
  avatar: string;
  waitingMessages: number;
  active?: boolean;
  handleChangeActive?: (id: string) => void;
}

const useStyles = makeStyles((theme: Theme) => ({
  name: (props: { data: { active: boolean; waitingMessages: number } }) => {
    return {
      color: props.data.active ? colors.white : theme.palette.text.primary,
    };
  },
}));

const Conversation: React.FC<IConversation> = (props) => {
  const { id, name, message, timestamp, avatar, active, waitingMessages, handleChangeActive } =
    props;
  const classes = useStyles({ data: { active: active ?? false, waitingMessages } });
  const themeContext = useTheme();

  return (
    <Box py={"4px"}>
      <MenuItem
        sx={{
          borderRadius: 3,
          px: 1.5,
          py: 1,
          background: active ? colors.blue : "none",
          "&:hover": {
            background: active ? colors.blue : "#9e9e9e24",
          },
        }}
        onClick={() => handleChangeActive && !active && handleChangeActive(id as string)}
        disableTouchRipple={active}
      >
        <ListItemIcon>
          <Avatar alt={name} src="/static/images/avatar/1.jpg" sx={{ width: 46, height: 46 }} />
        </ListItemIcon>
        <ListItemText sx={{ px: 2 }}>
          <Typography variant="subtitle2" className={classes.name}>
            James Aaron
          </Typography>
          <Stack>
            <Typography
              noWrap
              variant="body2"
              sx={{ fontWeight: 400, color: active ? colors.textGreyActive : colors.textGrey }}
            >
              Hello world, Hello world, Hello world, Hello world, Hello world, Hello world,
            </Typography>
          </Stack>
        </ListItemText>
        <Box>
          <Stack direction="column" justifyContent={"center"} alignItems="flex-end">
            <Typography
              variant="body2"
              sx={{
                fontWeight: 500,
                color: waitingMessages
                  ? active
                    ? colors.white
                    : themeContext.modeTheme === "dark"
                    ? colors.white
                    : colors.black
                  : active
                  ? colors.textGreyActive
                  : colors.textGrey,
              }}
            >
              09:15
            </Typography>
            {waitingMessages ? (
              <Stack py={"1px"} px={1} mt={"4px"} bgcolor={colors.red} borderRadius={"50%"}>
                <Typography variant="subtitle2" sx={{ color: colors.white }}>
                  {waitingMessages}
                </Typography>
              </Stack>
            ) : null}
          </Stack>
        </Box>
      </MenuItem>
    </Box>
  );
};

export default Conversation;
