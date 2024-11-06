

import { Button } from '@mui/material'
import {Google} from '@mui/icons-material'
import React from 'react'

const GoogleOneTapLogin = () => {
  return (
    <Button variant="outlined" startIcon={<Google/>}>
        Login With Google
    </Button>
  )
}

export default GoogleOneTapLogin
