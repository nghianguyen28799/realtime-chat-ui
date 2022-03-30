import { Avatar, IconButton, Stack, Typography, Box, Theme, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React from 'react'
import { colors } from '../../utils/colors';

const useStyles = makeStyles((theme: Theme) => ({
    chatBoxOther: {
        background: theme.palette.mode,
        // background: "#fff",
        maxWidth: "60%",
        width: "fit-content",
        padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
        borderRadius: `${theme.spacing(2.5)} !important`,
        borderTopLeftRadius: "0px !important",
    },
    myChatBox: {
        background: colors.blue,
        maxWidth: "60%",
        width: "fit-content",
        padding: `${theme.spacing(1.5)} ${theme.spacing(2)}`,
        borderRadius: theme.spacing(2.5),
        borderTopRightRadius: 0,
        color: colors.white
    }
}))

const Message = () => {
    const classes = useStyles();
    return (
        <Paper elevation={0} sx={{ background: "none" }}>
            {/* Messages from the other */}
            <Stack direction="row" alignItems={"center"}>
                <IconButton>
                    <Avatar sx={{ width: 40, height: 40 }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </IconButton>
                <Stack ml={2}>
                    <Typography variant="subtitle2">Your Name</Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>08:00 AM</Typography>
                </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" my={1}>
                <Paper elevation={0} className={classes.chatBoxOther}>
                    <Typography>asdsadsad sad sad sa dsa dsad sa das dsa d sdsadsad sad sad sa dsa dsad </Typography>
                </Paper>
                <Typography variant="subtitle2" sx={{ ml: 2 }}>08:00 AM</Typography>
            </Stack>
            {/* My Messages */}
            <Stack direction="row" alignItems={"center"} justifyContent="flex-end">
                <Stack mr={2} alignItems="flex-end">
                    <Typography variant="subtitle2">You</Typography>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>08:00 AM</Typography>
                </Stack>
                <IconButton>
                    <Avatar sx={{ width: 40, height: 40 }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Stack>
            <Stack direction="row" alignItems="center" justifyContent="flex-end" my={1}>
                <Typography variant="subtitle2" sx={{ mr: 2 }}>08:00 AM</Typography>
                <Box className={classes.myChatBox}>
                    <Typography>asdsadsad sad sad sa dsa dsad sa das dsa d sdsadsad sad sad sa dsa dsad </Typography>
                </Box>
            </Stack>
        </Paper>
    )
}

export default Message