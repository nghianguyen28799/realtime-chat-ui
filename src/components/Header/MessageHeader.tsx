import { Avatar, Box, Grid, IconButton, Paper, Stack, Typography } from '@mui/material'
import React from 'react'
import { size } from '../../utils/proportion'
import AvatarOnline from '../Avatar/AvatarOnline'
import SearchIcon from '@mui/icons-material/Search';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { colors } from '../../utils/colors';

const MessageHeader = () => {
    return (
        <Box height={size.headerHeight} pl="1px" pb="1px">
            <Paper elevation={0} sx={{ height: "100%" }}>
                <Stack width="100%" height="100%" py={1} px={4} justifyContent="center" >
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Stack height="100%" direction="row" alignItems="center">
                                <AvatarOnline>
                                    <Avatar sx={{ width: 40, height: 40 }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                </AvatarOnline>
                                <Stack ml={2}>
                                    <Typography variant="subtitle2">Your Name</Typography>
                                    <Typography variant="body2">Last seen Yesterday 02:30 PM</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack direction="row" justifyContent={"flex-end"}>
                                <IconButton aria-label="delete" sx={{ bgcolor: colors.grey, color: colors.textGrey, mx: 1 }}  >
                                    <MoreVertIcon />
                                </IconButton>
                                <IconButton aria-label="delete" sx={{ bgcolor: colors.grey, color: colors.textGrey, mx: 1 }}  >
                                    <AddIcCallIcon />
                                </IconButton>
                                <IconButton aria-label="delete" sx={{ bgcolor: colors.grey, color: colors.textGrey, mx: 1 }}  >
                                    <SearchIcon />
                                </IconButton>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Paper>
        </Box>
    )
}

export default MessageHeader