import { Menu, PopoverProps } from '@mui/material'
import React from 'react'

interface IMenuComponent {
    anchorEl: PopoverProps['anchorEl'],
    handleClose: () => void,
    children: React.ReactNode
}

const MenuComponent: React.FC<IMenuComponent> = ({ anchorEl, handleClose, children }) => {
    return (
        <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={Boolean(anchorEl)}
            onClose={handleClose}
            PaperProps={{
                elevation: 0,
                sx: {
                    overflow: 'visible',
                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                    mt: 1.5,
                    '& .MuiAvatar-root': {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                    },
                },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        >
            {children}
        </Menu>
    )
}

export default MenuComponent