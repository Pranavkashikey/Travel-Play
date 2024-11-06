import { Snackbar } from '@mui/material'
import React from 'react'
import { useValue } from '../context/ContextProvider'
import { Alert } from '@mui/material'

const Notifications = () => {
    const {state: {alert},dispatch}=useValue()

    const handleClose=(event,reason)=>{
        if(reason==='clickaway') return
        dispatch({type:'UPDATE-ALERT',payload:{...alert,open:false}})
    }
  return (
    <Snackbar
    open={alert.open}
    autoHideDuration={6000}
    onClose={handleClose}
    anchorOrigin={{vertical:'top',horizontal: 'center'}}
    >
        <Alert
        onClose={handleClose}
        severity={alert.seeverity}
        sx={{width: '100%'}}
        variant="filled"
        elevation={6}></Alert>
       
    </Snackbar>
  )
}

export default Notifications
