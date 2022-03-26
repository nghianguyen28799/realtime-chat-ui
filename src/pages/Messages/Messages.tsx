import { Box, Stack } from '@mui/material'
import React from 'react'
import ChatInput from '../../components/ChatInput/ChatInput'
import MessageHeader from '../../components/Header/MessageHeader'
import { size } from '../../utils/proportion'

const MessagesPage = () => {
    return (
        <Stack flex="1">
            <MessageHeader />
            <Stack pt="1px" pl="1px">
                <Box sx={{ overflowY: "auto", px: 4, height: `calc(100vh - ${size.headerHeight}px - 1px - ${size.chatInputHeight}px)` }}>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                    <h1>asd</h1>
                </Box>
            </Stack >
            <Stack height={size.chatInputHeight} px={4} justifyContent="center" alignItems="center">
                <ChatInput />
            </Stack>
        </Stack>
    )
}

export default MessagesPage