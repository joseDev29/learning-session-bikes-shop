import { Bike } from './bike.interface'

export interface ShoppingCartItemInterface extends Bike {
  selectedAmount: number
  total: number
}
