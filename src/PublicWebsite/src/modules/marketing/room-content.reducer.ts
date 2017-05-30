import {FETCH_ROOM_CONTENT} from '../marketing/room-content.actions'

export const initialState = {
  roomContent: {}
}

export const roomContentReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ROOM_CONTENT:
            return Object.assign({}, state, {
                roomContent: action.roomContent
            })
        default:    
            return state
    }
}
