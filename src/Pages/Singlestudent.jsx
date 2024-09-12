import { Box, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ImgMediaCard from '../Components/ViewExtraCard';

  function Singlestudent(){
    const [data , setData] = useState([]);
    const {id} = useParams();

    useEffect(() => {
      axios(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
      let products = res.data;
      setData(products)               
      })
      .catch(err => console.log(err.message)
      )
    } , [])
    console.log(data);
    



  return (
    <>
     <Box sx={{
      textAlign: "center",
      marginTop: "10px"
     }}>
      <Typography  variant="h4">
      Singlestudent
      </Typography>
    </Box>

    <Box>
      <ImgMediaCard img={data.image} title={data.title} price={data.price} description={data.description} />
    </Box>


    </>
  )
}

export default Singlestudent