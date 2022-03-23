import { Context, createContext, useState } from 'react'
import { getDocs } from 'firebase/firestore/lite'

import { Bike } from '../interfaces/bike.interface'

import {
  DataContextValue,
  DataProviderProps,
  Notification,
} from '../interfaces/data-context.interface'
import { ShoppingCartItemInterface } from '../interfaces/shopping-cart.interface'
import { bikesCollection } from '../db/db'
import { BIKES_MOCK } from '../mocks/bikes'

export const DataContext: Context<DataContextValue> = createContext(
  {} as DataContextValue,
)

export const DataProvider = ({ children }: DataProviderProps) => {
  const [bikes, setBikes] = useState<Bike[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItemInterface[]>(
    [],
  )
  const [notification, setNotification] = useState<Notification>({
    message: '',
    type: 'success',
    visible: false,
  })

  const showNotification = (
    message: string,
    type: 'success' | 'info' | 'error' | 'warning',
  ) => {
    if (notification.visible)
      setNotification({ ...notification, visible: false })

    setNotification({ message, type, visible: true })
  }

  const getBikes = async () => {
    setLoading(true)

    // const snapshot = await getDocs(bikesCollection)
    // const data = snapshot.docs.map((doc) => ({
    //   id: doc.id,
    //   ...doc.data(),
    // }))

    // setBikes(data as Bike[])
    setTimeout(() => {
      setBikes([...BIKES_MOCK])
      setLoading(false)
    }, 1500)
  }

  const addToShoppingCart = (item: Bike | ShoppingCartItemInterface) => {
    let isExist = false

    const newShoppingCart = shoppingCart.map((value) => {
      if (value.id === item.id) {
        isExist = true
        return {
          ...value,
          selectedAmount: value.selectedAmount + 1,
          total: value.total + item.price,
        }
      }

      return value
    })

    if (isExist) {
      setShoppingCart(newShoppingCart)
    } else {
      setShoppingCart([
        ...shoppingCart,
        { ...item, total: item.price, selectedAmount: 1 },
      ])
    }

    showNotification('Item added to cart', 'success')
  }

  const removeToShoppingCart = (id: string) => {
    let mustBeRemoved = false

    const newShoppingCart = shoppingCart.map((value) => {
      if (value.id === id) {
        const newValue: ShoppingCartItemInterface = {
          ...value,
          selectedAmount: value.selectedAmount - 1,
          total: value.total - value.price,
        }

        if (newValue.selectedAmount <= 0) mustBeRemoved = true

        return newValue
      }

      return value
    })

    if (mustBeRemoved) {
      setShoppingCart(newShoppingCart.filter((value) => value.id !== id))
    } else {
      setShoppingCart(newShoppingCart)
    }

    showNotification('Item removed from cart', 'success')
  }

  const value: DataContextValue = {
    bikes,
    shoppingCart,
    loading,
    notification,
    showNotification,
    setNotification,
    setShoppingCart,
    getBikes,
    addToShoppingCart,
    removeToShoppingCart,
  }

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>
}
