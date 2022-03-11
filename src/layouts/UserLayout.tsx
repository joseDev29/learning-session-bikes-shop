import { Fragment, ReactElement, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Container from '@mui/material/Container'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'

import { LayoutCover } from '../components/LayoutCover/LayoutCover'
import { NavBar } from '../components/NavBar/NavBar'
import { ShoppingCart } from '../components/ShoppingCart/ShoppingCart'
import { Notification } from '../components/Notification/Notification'

interface Props {
  children?: ReactElement | ReactElement[]
}

export const UserLayout = ({ children }: Props) => {
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false)

  const onOpen = () => setDrawerVisible(true)
  const onClose = () => setDrawerVisible(false)

  return (
    <Fragment>
      <CssBaseline />
      <Drawer
        title='Shopping Cart'
        anchor='right'
        open={drawerVisible}
        onClose={onClose}
      >
        <ShoppingCart
          extra={
            <IconButton onClick={onClose}>
              <CloseOutlinedIcon />
            </IconButton>
          }
          closeDrawer={onClose}
        />
      </Drawer>
      <NavBar onClickShoppingCartBtn={onOpen} />
      <LayoutCover />
      <Container style={{ padding: 16 }}>{children}</Container>
      <Notification />
    </Fragment>
  )
}
