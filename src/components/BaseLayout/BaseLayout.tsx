import { Stack } from '@mui/material';
import React from 'react'
import SideBar from '../SideBar/SideBar';

interface IBaseLayout {
    children: React.ReactNode;
}

const BaseLayout:React.FC<IBaseLayout> = (props) => {
  return (
    <Stack width="100vw" height="100vh">
        <SideBar />
    </Stack>
  )
}

export default BaseLayout