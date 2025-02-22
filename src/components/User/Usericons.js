

import {Mail, Notifications } from '@mui/icons-material'
import {Avatar,Badge,Box,IconButton,Tooltip} from '@mui/material'
import React from 'react'
import {useValue} from '../../context/ContextProvider';
import Usermenu from './Usermenu';
import  { useState } from 'react';

const Usericons = () => {
    const {state:{currentUser}} = useValue();
    const [anchorUserMenu,setAnchorUserMenu]=useState(null)
  return (
    <Box>
        <IconButton size='large' color='inherit'>
            <Badge color='error' badgeContent={5}>
                <Mail/>
            </Badge>
        </IconButton>
        <IconButton size='large' color='inherit'>
            <Badge color='error' badgeContent={20}>
                <Notifications/>
            </Badge>
        </IconButton>
        <Tooltip title='Open User Settings'>
            <IconButton onClick={(e)=>setAnchorUserMenu(e.currentTarget)}>
                <Avatar src={currentUser?.photoURL} alt={currentUser?.name}>
                    {currentUser?.name?.charAt(0).toUpperCase()} 

                </Avatar>
            </IconButton>

        </Tooltip>
        <Usermenu {...{anchorUserMenu,setAnchorUserMenu}}/>
    </Box>
  )
}

export default Usericons
