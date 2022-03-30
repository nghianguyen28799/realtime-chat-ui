import { Box, Stack } from "@mui/material";
import React from "react";
import ChatInput from "../../components/ChatInput/ChatInput";
import MessageHeader from "../../components/Header/MessageHeader";
import Message from "../../components/Message/Message";
import { IsMobile } from "../../utils/display";
import { size } from "../../utils/proportion";

export interface IMessage {
  activeId: string;
  handleChangeActive: (id: string) => void;
}

const MessagesPage: React.FC<IMessage> = ({ activeId, handleChangeActive }) => {
  return (
    <Stack flex="1" minWidth={"300px"}>
      <MessageHeader activeId={activeId} handleChangeActive={handleChangeActive} />
      <Stack pt="1px" pl="1px">
        <Box
          sx={{
            overflowY: "auto",
            px: IsMobile() ? 1 : 4,
            height: `calc(100vh - ${size.headerHeight}px - 1px - ${size.chatInputHeight}px)`,
          }}
        >
          <Message />
        </Box>
      </Stack>
      <Stack
        height={size.chatInputHeight}
        px={IsMobile() ? 1 : 4}
        justifyContent="center"
        alignItems="center"
      >
        <ChatInput />
      </Stack>
    </Stack>
  );
};

export default MessagesPage;
