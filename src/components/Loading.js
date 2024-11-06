import React from 'react'
import { Backdrop,CircularProgress } from '@mui/material'
import { useValue } from '../context/ContextProvider'

const Loading = () => {
    const {state:{loading}}=useValue()
  return (
   <Backdrop
   open={loading}
   sx={{
     zIndex: (theme) => theme.zIndex.modal + 1,
     backgroundColor: 'rgba(0, 0, 0, 0.6)',transition: 'opacity 0.3s ease',  // Darken the background a little more
   }}>
    <CircularProgress sx={{color:'white'}} />
    
   </Backdrop>
  )
}

export default Loading
