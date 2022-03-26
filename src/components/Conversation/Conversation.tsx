import { Avatar, Box, ListItemIcon, ListItemText, MenuItem, Stack, Theme, Typography } from '@mui/material'
import React from 'react'
import { colors } from '../../utils/colors'
import { makeStyles } from '@mui/styles';

export interface IConversation {
  name: string,
  message: string,
  timestamp: Date,
  avatar: string,
  waitingMessages: number,
  active: boolean,
}

const useStyles = makeStyles((theme: Theme) => ({
  itemMenu: ((props: { data: { active: boolean, waitingMessages: number } }) => {
    return {
      background: props.data.active ? colors.blue : theme.palette.mode,

      "&:hover": {
        background: props.data.active ? colors.blue : "#9e9e9e24"
      }
    }
  }),

  name: ((props: { data: { active: boolean, waitingMessages: number } }) => {
    return {
      color: props.data.active ? colors.white : theme.palette.text.primary
    }
  }),

  message: ((props: { data: { active: boolean, waitingMessages: number } }) => {
    return {
      color: props.data.active ? colors.textGreyActive : colors.textGrey,
    }
  }),

  time: ((props: { data: { active: boolean, waitingMessages: number } }) => {
    return {
      color: props.data.waitingMessages
        ? props.data.active ? colors.white : theme.palette.text.primary
        : theme.palette.mode
    }
  }),
}))

const Conversation: React.FC<IConversation> = (props) => {
  const { name, message, timestamp, avatar, active, waitingMessages } = props;

  const classes = useStyles({ data: { active, waitingMessages } });

  return (
    <Box py={"4px"}>
      <MenuItem sx={{ borderRadius: 3, px: 1.5, py: 1 }} className={classes.itemMenu} disableTouchRipple={active}>
        <ListItemIcon>
          <Avatar
            alt={name}
            src="/static/images/avatar/1.jpg"
            sx={{ width: 46, height: 46 }}
          />
        </ListItemIcon>
        <ListItemText sx={{ px: 2 }}>
          <Typography variant="subtitle2" className={classes.name}>James Aaron</Typography>
          <Stack>
            <Typography noWrap variant="body2" sx={{ fontWeight: 400 }} className={classes.message}>Hello world, Hello world, Hello world, Hello world, Hello world, Hello world,</Typography>
          </Stack>
        </ListItemText>
        <Typography variant="body2" color="text.secondary">
          <Stack direction="column" justifyContent={"center"} alignItems="flex-end">
            <Typography variant="body2" sx={{ fontWeight: 400 }} className={classes.time}>09:15</Typography>
            {
              waitingMessages
                ?
                <Stack py={"1px"} px={1} mt={"4px"} bgcolor={colors.red} borderRadius={"50%"}>
                  <Typography variant="subtitle2" sx={{ color: colors.white }}>{waitingMessages}</Typography>
                </Stack>
                : null
            }
          </Stack>
        </Typography>
      </MenuItem>
    </Box >
  )
}

export default Conversation