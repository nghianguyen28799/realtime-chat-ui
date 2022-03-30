import { Box, Collapse, Grid, IconButton, Stack, Typography } from "@mui/material";
import React from "react";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import GroupsIcon from "@mui/icons-material/Groups";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Conversation, { IConversation } from "../Conversation/Conversation";

interface IFeatureMessage {
  type: "group" | "all";
  opened?: boolean;
  handleChange?: () => void;
  data?: IConversation[];
  activeId: string;
  handleChangeActive: (id: string) => void;
}

const FeatureMessage: React.FC<IFeatureMessage> = (props) => {
  const { type, opened, handleChange, data, activeId, handleChangeActive } = props;
  return (
    <Stack>
      <Grid container spacing={1}>
        <Grid item xs={8}>
          <Stack
            direction={"row"}
            alignItems="center"
            onClick={handleChange}
            sx={{ display: "inline-flex", cursor: "pointer" }}
          >
            <Box
              sx={{
                px: 1,
                py: "6px",
                bgcolor: type === "group" ? "#7246da" : "#32bdbe",
                borderRadius: "50%",
              }}
            >
              <GroupsIcon fontSize="small" sx={{ color: "#ffffff" }} />
            </Box>
            <Typography variant="body2" sx={{ mx: 2 }}>
              {type === "group" ? "Group Message" : "All Message"}
            </Typography>
            {opened ? <ExpandMoreIcon fontSize="small" /> : <ExpandLessIcon fontSize="small" />}
          </Stack>
        </Grid>
        <Grid item xs={4}>
          <Stack alignItems={"flex-end"}>
            <IconButton>
              <MoreHorizIcon />
            </IconButton>
          </Stack>
        </Grid>
      </Grid>
      <Box my={1} ml={-2}>
        <Collapse in={opened}>
          {data?.length
            ? data?.map((item, index) => {
                const newItem = { ...item, active: item.id === activeId };
                return (
                  <React.Fragment key={index}>
                    <Conversation {...newItem} handleChangeActive={handleChangeActive} />
                  </React.Fragment>
                );
              })
            : null}
        </Collapse>
      </Box>
    </Stack>
  );
};

export default FeatureMessage;
