import React from "react";
// import { Picker, EmojiData } from "emoji-mart";
import { Divider, IconButton, InputBase, Paper } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { useTheme } from "../../contexts/ThemeContext";
import SendIcon from "@mui/icons-material/Send";
import { colors } from "../../utils/colors";
import MenuComponent from "../Menu/Menu";
import { IsMobile } from "../../utils/display";

interface Inputs {
  textInput: string;
}

const ChatInput = () => {
  const themeContext = useTheme();
  const { register, handleSubmit, watch, setValue } = useForm<Inputs>();
  const [anchorElEmoji, setAnchorElEmoji] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElEmoji(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorElEmoji(null);
  };

  const addEmoji = (e: any) => {
    let sym = e.unified.split("-");
    let codesArray: any = [];
    sym.forEach((el: any) => codesArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codesArray);
    setValue("textInput", watch("textInput") + emoji);
    handleClose();
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
        <Paper
          elevation={themeContext.modeTheme === "dark" ? 2 : 0}
          sx={{ py: "4px", display: "flex", alignItems: "center", width: "100%", borderRadius: 8 }}
        >
          <IconButton sx={{ p: "10px", mx: 1.5 }} aria-label="emoji" onClick={handleClick}>
            <InsertEmoticonIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <InputBase
            {...register("textInput")}
            sx={{ ml: 1, flex: 1 }}
            placeholder="Type a message"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton
            type="submit"
            color="primary"
            sx={{
              p: "10px",
              mx: 1.5,
              background: colors.blue,
              "&:hover": {
                background: colors.blue,
              },
            }}
            aria-label="send"
          >
            <SendIcon
              sx={{ color: colors.white, ml: "4px", my: "1px" }}
              fontSize={IsMobile() ? "small" : "medium"}
            />
          </IconButton>
        </Paper>
        <MenuComponent anchorEl={anchorElEmoji} handleClose={handleClose}>
          <Picker onSelect={addEmoji} theme={themeContext.modeTheme} />
        </MenuComponent>
      </form>
    </React.Fragment>
  );
};

export default ChatInput;
