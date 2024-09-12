import React from 'react'
import { Outlet } from 'react-router-dom'
import ResponsiveAppBar from './Components/Navbar'
import { Box, Typography } from '@mui/material'
import MediaCard from './Components/Card'

const Product = () => {
  return (
    <>
    <Box>
      <Typography sx={{
        textAlign: "center",
        marginTop: "10px"
      }} variant ="h4">
        PRODUCTS

      </Typography>
    </Box>


    <ResponsiveAppBar />
    <Outlet />

    </>
  )
}

export default Product