import { ListItemIcon, Menu, MenuItem} from '@mui/material'
import {Logout,Settings} from '@mui/icons-material'
import React from 'react'
import {useValue} from '../../context/ContextProvider'

const Usermenu = ({anchorUserMenu,setAnchorUserMenu}) => {
    const{dispatch}=useValue()
    const handleCloseUserMenu=()=>{
        setAnchorUserMenu(null)
    }
    return (
    <Menu
    anchorEl={anchorUserMenu}
    open={Boolean(anchorUserMenu)}
    onClose={handleCloseUserMenu}
    onClick={handleCloseUserMenu}>
        <MenuItem>
        <ListItemIcon>
            <Settings fontSize="small"/>

        </ListItemIcon>
        Profile
        </MenuItem>
        <MenuItem onClick={()=>dispatch({type:'UPDATE_USER',payload:null})}>
        <ListItemIcon>
            <Logout fontSize="small"/>

        </ListItemIcon>
        LogOut
        </MenuItem>

    </Menu>
  )
}

export default Usermenu
