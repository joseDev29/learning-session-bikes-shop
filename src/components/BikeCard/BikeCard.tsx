import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import Button from '@mui/material/Button'
import Rating from '@mui/material/Rating'

import { Bike } from '../../interfaces/bike.interface'
import { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'
import { DataContextValue } from '../../interfaces/data-context.interface'

interface Props {
  item: Bike
}

export const BikeCard = ({ item }: Props) => {
  const { addToShoppingCart } = useContext<DataContextValue>(DataContext)

  const { model, review, price, quantity, imageBicycle } = item || {}

  const onAdd = () => addToShoppingCart(item)

  return (
    <Card style={{ height: 440 }}>
      <CardMedia image={imageBicycle} component='img' height={200} />
      <Box
        height='calc(100% - 200px)'
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
      >
        <CardContent>
          <Typography variant='subtitle1' fontWeight='bold'>
            {model}
          </Typography>
          <Rating value={review} precision={0.5} readOnly />
        </CardContent>
        <Box>
          <CardContent style={{ paddingTop: 0 }}>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
            >
              <Typography>{quantity} unds</Typography>
              <Typography>${price?.toFixed(2)}</Typography>
            </Box>
          </CardContent>
          <CardActions style={{ paddingTop: 0, paddingBottom: 8 }}>
            <Button
              variant='contained'
              fullWidth
              endIcon={<AddShoppingCartIcon />}
              onClick={onAdd}
            >
              Add to cart
            </Button>
          </CardActions>
        </Box>
      </Box>
    </Card>
  )
}
