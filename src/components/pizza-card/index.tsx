import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { PizzaCardProps } from './interface';
import './styles.css';
import React from 'react';
import { Button } from '@mui/material';

const PizzaCard: React.FC<PizzaCardProps> = ({ item, addItemToCart }: PizzaCardProps): JSX.Element => {

  return (
    <Card className='card-container' sx={{ maxWidth: 200 }}>
      <CardHeader
        title={item.name}
      />
      <CardMedia
        component="img"
        height="100"
        image={item.image}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="h5" color="text.secondary">
          Price: {item.price}
        </Typography>

        <Button onClick={() => addItemToCart(item.id, -1)}>Remove</Button>
        <Button onClick={() => addItemToCart(item.id, 1)}>Add</Button>
      </CardContent>
    </Card>
  );
}

export default PizzaCard;
