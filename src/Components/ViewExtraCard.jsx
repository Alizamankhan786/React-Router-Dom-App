import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({image , title , price , description}) {
  return (
    <Card sx={{ maxWidth: 345  }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
            {title}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
            {price} RS
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
            {description}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
      <Button size="small" variant='contained'>Add to Cart</Button>
      </CardActions>
    </Card>
  );
}