import { Dispatch, ReactElement, SetStateAction } from 'react'

import { Bike } from './bike.interface'
import { ShoppingCartItemInterface } from './shopping-cart.interface'

export interface DataProviderProps {
  children?: ReactElement | ReactElement[]
}

export interface Notification {
  visible: boolean
  message: string
  type: 'success' | 'error' | 'info' | 'warning'
}

export interface DataContextValue {
  bikes: Bike[]
  shoppingCart: ShoppingCartItemInterface[]
  notification: Notification
  loading: boolean
  setNotification: Dispatch<SetStateAction<Notification>>
  setShoppingCart: Dispatch<SetStateAction<ShoppingCartItemInterface[]>>
  getBikes: () => Promise<void>
  addToShoppingCart: (item: Bike | ShoppingCartItemInterface) => any
  removeToShoppingCart: (id: string) => any
  showNotification: (
    message: string,
    type: 'success' | 'info' | 'error' | 'warning',
  ) => any
}
