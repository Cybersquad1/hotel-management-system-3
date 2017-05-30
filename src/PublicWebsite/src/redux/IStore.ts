import { ShoppingCart } from '../shoppingCart';

export type IStore = {
    shoppingCart: ShoppingCart,
    roomTypeIds: Array<number>,
    roomContent: any
}