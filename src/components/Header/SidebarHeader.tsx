import {
  Avatar,
  Divider,
  Grid,
  IconButton,
  ListItemIcon,
  MenuItem,
  Paper,
  Stack,
  Theme,
  Tooltip,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { colors } from "../../utils/colors";
import { size } from "../../utils/proportion";
import AvatarOnline from "../Avatar/AvatarOnline";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import MenuComponent from "../Menu/Menu";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";
import { useTheme } from "../../contexts/ThemeContext";
import { makeStyles } from "@mui/styles";
import { IsMobile } from "../../utils/display";

const useStyles = makeStyles((theme: Theme) => ({
  iconButton: {
    background: `${theme.palette.action.hover} !important`,
    color: colors.textGrey,
    margin: `0px 8px !important`,
  },
}));

const SidebarHeader = () => {
  const classes = useStyles();
  const themeContext = useTheme();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const onChangeMode = () => {
    localStorage.setItem("mode", themeContext.modeTheme === "dark" ? "light" : "dark");
    themeContext.setModeTheme(themeContext.modeTheme === "dark" ? "light" : "dark");
  };

  return (
    <Box
      height={size.headerHeight}
      width={IsMobile() ? "100vw" : size.sideBarWidth}
      pr="1px"
      pb="1px"
    >
      <Paper elevation={themeContext.modeTheme === "dark" ? 1 : 0} sx={{ height: "100%" }}>
        <Stack width="100%" height="100%" py={1} px={IsMobile() ? 1 : 4} justifyContent="center">
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack height="100%" direction="row" alignItems="center">
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

                <MenuComponent anchorEl={anchorEl} handleClose={handleClose}>
                  <MenuItem>
                    <Avatar /> Profile
                  </MenuItem>
                  <MenuItem>
                    <Avatar /> My account
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                  </MenuItem>
                  <MenuItem>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </MenuComponent>

                <Stack ml={IsMobile() ? 1 : 2}>
                  <Typography variant="body2" noWrap>Good Morning</Typography>
                  <Typography variant="subtitle2" noWrap>Your Name</Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack height={"100%"} direction="row" justifyContent={"flex-end"} alignItems="center">
                <IconButton
                  onClick={onChangeMode}
                  size={IsMobile() ? "small" : "medium"}
                  className={classes.iconButton}
                >
                  {themeContext.modeTheme === "dark" ? (
                    <LightModeIcon fontSize={IsMobile() ? "small" : "medium"} />
                  ) : (
                    <ModeNightIcon fontSize={IsMobile() ? "small" : "medium"} />
                  )}
                </IconButton>
                <IconButton size={IsMobile() ? "small" : "medium"} className={classes.iconButton}>
                  <AddIcon fontSize={IsMobile() ? "small" : "medium"} />
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

export default SidebarHeader;
