import { IconButton, InputAdornment, OutlinedInput } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import { colors } from '../../utils/colors';
import { createTheme, styled, ThemeProvider } from "@mui/material/styles";

let theme = createTheme({
  palette: {
    action: {
      selected: "#f7fafc",
      hover: "#f7fafc",
    },
  },
});

const CssOutlinedInput = styled(OutlinedInput)({
  '& label.Mui-focused': {
    color: 'green',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'green',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'red',
    },
    '&:hover fieldset': {
      borderColor: 'yellow',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'green',
    },
  },
});


const ChatInput = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssOutlinedInput
        id="outlined-adornment-password"
        type="text"
        // value={values.password}
        // onChange={handleChange('password')}
        fullWidth
        endAdornment={
          <InputAdornment position="end" sx={{ px: 1}}>
            <IconButton
              aria-label="toggle password visibility"
              edge="end"
              size="large"
              color="primary"
              sx={{ bgcolor: colors.blue }}
            >
              <SendIcon fontSize="small" sx={{ color: colors.white }} />
            </IconButton>
          </InputAdornment>
        }
      />
    </ThemeProvider>
  )
}

export default ChatInput