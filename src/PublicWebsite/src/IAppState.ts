import { ShoppingCart } from './shoppingCart';

export interface IAppState {
    shoppingCart: ShoppingCart,
    roomTypeIds: Array<number>;
}