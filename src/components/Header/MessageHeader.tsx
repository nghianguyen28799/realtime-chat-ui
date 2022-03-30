import {
  Avatar,
  Box,
  Grid,
  IconButton,
  MenuItem,
  Paper,
  Stack,
  Theme,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import { size } from "../../utils/proportion";
import AvatarOnline from "../Avatar/AvatarOnline";
import SearchIcon from "@mui/icons-material/Search";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import { colors } from "../../utils/colors";
import MenuComponent from "../Menu/Menu";
import { makeStyles } from "@mui/styles";
import { useTheme } from "../../contexts/ThemeContext";
import { IsMobile } from "../../utils/display";
import { IMessage } from "../../pages/MessagesPage/MessagesPage";

const useStyles = makeStyles((theme: Theme) => ({
  iconButton: {
    background: `${theme.palette.action.hover} !important`,
    color: colors.textGrey,
    margin: `0 8px !important`,
  },
}));

const MessageHeader: React.FC<IMessage> = ({ handleChangeActive }) => {
  const classes = useStyles();
  const themeContext = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box height={size.headerHeight} pl="1px" pb="1px">
      <Paper elevation={themeContext.modeTheme === "dark" ? 1 : 0} sx={{ height: "100%" }}>
        <Stack width="100%" height="100%" py={1} px={IsMobile() ? 1 : 4} justifyContent="center">
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Stack height="100%" direction="row" alignItems="center">
                {IsMobile() ? (
                  <Tooltip title="Account settings">
                    <IconButton onClick={() => handleChangeActive("")} size="small">
                      <KeyboardArrowLeftIcon />
                    </IconButton>
                  </Tooltip>
                ) : (
                  <></>
                )}

                <Tooltip title="Account settings">
                  <IconButton onClick={handleClick} size="small">
                    <AvatarOnline>
                      <Avatar
                        sx={{ width: 40, height: 40 }}
                        alt="Travis Howard"
                        src="/static/images/avatar/2.jpg"
                      />
                    </AvatarOnline>
                  </IconButton>
                </Tooltip>

                <Stack
                  ml={IsMobile() ? 1 : 2}
                  sx={{ width: IsMobile() ? `calc(100% - 34px)` : "100%" }}
                >
                  <Typography variant="subtitle2" noWrap>
                    Your Name
                  </Typography>
                  <Typography variant="body2" noWrap>
                    Last seen Yesterday 02:30 PM
                  </Typography>
                </Stack>
              </Stack>
              <MenuComponent anchorEl={anchorEl} handleClose={handleClose}>
                <MenuItem>
                  <Avatar /> Profile
                </MenuItem>
              </MenuComponent>
            </Grid>
            <Grid item xs={6}>
              <Stack height="100%" direction="row" justifyContent={"flex-end"} alignItems="center">
                <IconButton size={IsMobile() ? "small" : "medium"} className={classes.iconButton}>
                  <MoreVertIcon fontSize={IsMobile() ? "small" : "medium"} />
                </IconButton>
                <IconButton size={IsMobile() ? "small" : "medium"} className={classes.iconButton}>
                  <AddIcCallIcon fontSize={IsMobile() ? "small" : "medium"} />
                </IconButton>
                <IconButton size={IsMobile() ? "small" : "medium"} className={classes.iconButton}>
                  <SearchIcon fontSize={IsMobile() ? "small" : "medium"} />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Paper>
    </Box>
  );
};

export default MessageHeader;
