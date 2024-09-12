import { Box, Typography } from '@mui/material'
import React from 'react'
import MediaCard from '../Components/Card'

const Home = () => {
  return (
    <>
     <Box sx={{
      textAlign: "center",
      marginTop: "10px"
     }}>
      <Typography variant="h4">
      Home
      </Typography>
    </Box>
    

    <MediaCard />
    </>
  )
}

export default Home