import { Avatar, Grid, IconButton, Paper, Stack, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { colors } from '../../utils/colors'
import { size } from '../../utils/proportion'
import AvatarOnline from '../Avatar/AvatarOnline'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import LightModeIcon from '@mui/icons-material/LightMode';

const SidebarHeader = () => {
    return (
        <Box height={size.headerHeight} width={size.sideBarWidth} pl="1px" pb="1px">
            <Paper elevation={0} sx={{ height: "100%" }}>
                <Stack width="100%" height="100%" py={1} px={4} justifyContent="center" >
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Stack height="100%" direction="row" alignItems="center">
                                <AvatarOnline>
                                    <Avatar sx={{ width: 40, height: 40 }} alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                                </AvatarOnline>
                                <Stack ml={2}>
                                    <Typography variant="body2">Good Morning</Typography>
                                    <Typography variant="subtitle2">Your Name</Typography>
                                </Stack>
                            </Stack>
                        </Grid>
                        <Grid item xs={6}>
                            <Stack direction="row" justifyContent={"flex-end"}>
                                <IconButton aria-label="delete" size="large" sx={{ bgcolor: colors.grey, color: colors.textGrey, mx: 1 }}  >
                                    <LightModeIcon />
                                </IconButton>
                                <IconButton aria-label="delete" size="large" sx={{ bgcolor: colors.grey, color: colors.textGrey, mx: 1 }}  >
                                    <AddIcon />
                                </IconButton>
                                <IconButton aria-label="delete" size="large" sx={{ bgcolor: colors.grey, color: colors.textGrey, mx: 1 }}  >
                                    <SearchIcon />
                                </IconButton>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Paper>

        </Box >
    )
}

export default SidebarHeader