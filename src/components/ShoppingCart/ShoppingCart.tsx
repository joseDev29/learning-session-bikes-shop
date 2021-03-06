import { ReactElement, useContext, useState } from 'react'
import Box from '@mui/material/Box'
import LoadingButton from '@mui/lab/LoadingButton'
import Typography from '@mui/material/Typography'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined'

import { DataContext } from '../../context/DataProvider'
import { DataContextValue } from '../../interfaces/data-context.interface'
import { ShoppingCartItem } from '../ShoppingCartItem/ShoppingCartItem'
import { EmptyShoppingCart } from '../EmptyShoppingCart/EmptyShoppingCart'

interface Props {
  extra?: ReactElement
  closeDrawer: () => any
}

export const ShoppingCart = ({ extra, closeDrawer }: Props) => {
  const { shoppingCart, setShoppingCart, showNotification } =
    useContext<DataContextValue>(DataContext)

  const [purchaseLoading, setPurchaseLoading] = useState<boolean>(false)

  const total = shoppingCart.reduce(
    (accumulated, item) => accumulated + item.total,
    0,
  )

  const onConfirmSell = () => {
    setPurchaseLoading(true)
    setTimeout(() => {
      setPurchaseLoading(false)
      closeDrawer()
      setShoppingCart([])
      showNotification(
        'Successful transaction, thank you for your purchase',
        'success',
      )
    }, 2000)
  }

  return (
    <Box
      display='flex'
      flexDirection='column'
      style={{ minWidth: 320, maxWidth: 460, padding: 16 }}
    >
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Typography variant='h6'>Shopping Cart</Typography>
        {extra}
      </Box>
      {shoppingCart.length ? (
        <>
          <Box
            display='flex'
            flexDirection='column'
            marginTop={2}
            gap={1}
            height='calc(100vh - 88px - 100.5px)'
            overflow='auto'
            paddingBottom={1}
          >
            {shoppingCart.map((item) => (
              <ShoppingCartItem key={item.id} item={item} />
            ))}
          </Box>

          <Box marginTop={2}>
            <Box
              display='flex'
              justifyContent='space-between'
              alignItems='center'
            >
              <Typography variant='h6'>Total</Typography>
              <Typography variant='h5'>${total?.toFixed(2)}</Typography>
            </Box>
            <LoadingButton
              variant='contained'
              fullWidth
              style={{ marginTop: 16 }}
              onClick={onConfirmSell}
              loading={purchaseLoading}
              loadingPosition='center'
              endIcon={<CheckOutlinedIcon />}
            >
              Confirm purchase
            </LoadingButton>
          </Box>
        </>
      ) : (
        <EmptyShoppingCart />
      )}
    </Box>
  )
}
