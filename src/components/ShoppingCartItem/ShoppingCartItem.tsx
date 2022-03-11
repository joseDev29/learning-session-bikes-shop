import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import RemoveCircleOutlineOutlinedIcon from '@mui/icons-material/RemoveCircleOutlineOutlined'

import { ShoppingCartItemInterface } from '../../interfaces/shopping-cart.interface'
import { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'
import { DataContextValue } from '../../interfaces/data-context.interface'

interface Props {
  item: ShoppingCartItemInterface
}

export const ShoppingCartItem = ({ item }: Props) => {
  const { addToShoppingCart, removeToShoppingCart } =
    useContext<DataContextValue>(DataContext)

  const { model, selectedAmount, total, imageBicycle } = item || {}

  const onAdd = () => addToShoppingCart(item)
  const onRemove = () => removeToShoppingCart(item.id)

  return (
    <Card style={{ minHeight: 100 }}>
      <Grid height='100%' overflow='hidden' container>
        <Grid item xs={4}>
          <CardMedia image={imageBicycle} component='img' height='100%' />
        </Grid>
        <Grid item xs={8} padding={1}>
          <Box
            display='flex'
            flexDirection='column'
            justifyContent='space-between'
            height='100%'
          >
            <CardContent style={{ padding: 0 }}>
              <Typography variant='subtitle1' fontWeight='bold'>
                {model}
              </Typography>
            </CardContent>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
            >
              <Typography variant='subtitle2'>${total?.toFixed(2)}</Typography>
              <CardActions style={{ padding: 0 }}>
                <IconButton
                  size='small'
                  color='info'
                  style={{ marginRight: 4 }}
                  onClick={onAdd}
                >
                  <AddCircleOutlineIcon />
                </IconButton>
                <Typography variant='subtitle2'>{selectedAmount}</Typography>
                <IconButton
                  color='error'
                  style={{ marginLeft: 4 }}
                  onClick={onRemove}
                >
                  <RemoveCircleOutlineOutlinedIcon />
                </IconButton>
              </CardActions>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Card>
  )
}
