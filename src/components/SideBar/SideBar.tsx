import { Box, Paper, Stack } from '@mui/material'
import React from 'react'
import { size } from '../../utils/proportion'
import FeatureMessage from '../FeatureMessage/FeatureMessage'
import SidebarHeader from '../Header/SidebarHeader'

const data = [
  {
    name: "James Aaron",
    message: "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello",
    timestamp: new Date(),
    avatar: "J",
    active: false,
    waitingMessages: 2,
  },
  {
    name: "James Aaron",
    message: "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello",
    timestamp: new Date(),
    avatar: "J",
    active: true,
    waitingMessages: 2,
  },
  {
    name: "James Aaron",
    message: "Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello",
    timestamp: new Date(),
    avatar: "J",
    active: false,
    waitingMessages: 0,
  }
]
const SideBar = () => {
  const [isGroupOpened, setGroupOpened] = React.useState<boolean>(false);
  const [isAllOpened, setAllOpened] = React.useState<boolean>(false);

  const handleChangeGroup = () => {
    setGroupOpened((prev) => !prev);
  }

  const handleChangeAll = () => {
    setAllOpened((prev) => !prev);
  }

  return (
    <Stack direction="column">
      <SidebarHeader />
      <Paper elevation={0} sx={{ width: size.sideBarWidth, overflowY: "auto", display: "flex", flexDirection: "column", flex: 1, mt: "1px", px: 4, py: 2 }}>
        <FeatureMessage type="group" opened={isGroupOpened} handleChange={handleChangeGroup} data={data} />
        <FeatureMessage type="all" opened={isAllOpened} handleChange={handleChangeAll} />
      </Paper>
    </Stack>
  )
}

export default SideBar