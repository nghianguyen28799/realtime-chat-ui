import { Stack } from '@mui/material';
import React from 'react'
import MessagesPage from '../../pages/Messages/Messages';
import RenderRoutes from '../../routes/RenderRoutes';
import SideBar from '../SideBar/SideBar';


const BaseLayout = () => {
  return (
    <Stack width="100vw" height="100vh">
      <Stack direction="row" height="100%">
        <SideBar />
        {/* <RenderRoutes /> */}
        <MessagesPage />
      </Stack>
    </Stack>
  )
}

export default BaseLayout