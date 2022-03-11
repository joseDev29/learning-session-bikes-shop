import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Badge from '@mui/material/Badge'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'

import LogoMinimal from '../../assets/images/logo-minimal.svg'
import { useContext } from 'react'
import { DataContext } from '../../context/DataProvider'
import { DataContextValue } from '../../interfaces/data-context.interface'

interface Props {
  onClickShoppingCartBtn: () => any
}

export const NavBar = ({ onClickShoppingCartBtn }: Props) => {
  const { shoppingCart } = useContext<DataContextValue>(DataContext)

  return (
    <AppBar style={{ padding: '8px 16px' }} position='sticky' enableColorOnDark>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <img src={LogoMinimal} height={35} alt='Logo' />
        <IconButton color='inherit' onClick={onClickShoppingCartBtn}>
          <Badge badgeContent={shoppingCart.length} color='error'>
            <ShoppingCartOutlinedIcon />
          </Badge>
        </IconButton>
      </Box>
    </AppBar>
  )
}
