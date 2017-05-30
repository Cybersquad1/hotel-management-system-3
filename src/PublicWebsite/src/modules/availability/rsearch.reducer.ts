import {UPDATE_SEARCH_CRITERIA, SEARCH_AVAILABILITY} from './rsearch.actions'
import {FETCH_ROOM_CONTENT} from '../marketing/room-content.actions'

import {ShoppingCart} from '../../shoppingCart'

const initialState = {
  shoppingCart: {} as ShoppingCart
}

export const availabilityReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_CRITERIA:
            return Object.assign({}, state, {
                shoppingCart: {
                    ...state.shoppingCart, 
                    checkin: action.selectedDates.checkin,
                    checkout: action.selectedDates.checkout
                }
            })
        case SEARCH_AVAILABILITY:
            console.log('reducer',action);
            return Object.assign({}, state, 
                 action.shoppingCart
            )
        default:
            return state
  }
}
