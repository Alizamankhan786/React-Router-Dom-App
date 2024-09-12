import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { Box, CircularProgress } from '@mui/material';
import axios from 'axios';
import { useState , useEffect } from 'react';


export default function MediaCard() {
    
    const [user, setUser] = useState(null);

    useEffect(() => {
    axios('https://fakestoreapi.com/products')
    .then((res) => {
    console.log(res.data);
    let response = res.data
    setUser(response)  
    })
    .catch((err) => {
    console.log( err);
     
    }
  )
    } , [])

    const navigate = useNavigate()

    const Singlestudent = (item) => {
        navigate(`Singlestudent/${item.id}`)
    }




  return (

    <>
    {user ? user.map((item) => {
        return(

        <Card key={item.id} sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: "100px" , width: "300px" }}
        image={item.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="category">
          {item.category}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {item.price} RS
        </Typography>
        <Typography gutterBottom variant="h6" component="description">
          {item.description} 
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions sx={{
        display: `flex`,
        justifyContent: "center",
        flex: "wrap"
      }}>
        <Button className='btn btn-primary' size='small' color='primary' onClick={() => Singlestudent(item)}>Shop Now</Button>

      </CardActions>
    </Card>
  );

}): <Box sx={{textAlign:'center'}} margin={10}>
<CircularProgress />
</Box>}

</>


);
};
    
