export const FETCH_ROOM_CONTENT = 'FETCH_ROOM_CONTENT';
import { RoomContentApiClient } from './room-content.apiClient';

export const fetchRoomContent = (roomTypeIds) => {
    var roomContentApiClient = new RoomContentApiClient();

    return (dispatch) => {
        return roomContentApiClient.fetch(roomTypeIds)
            .then(response => {
                dispatch(fetch(response))
            })
    }
}

export const fetch = (roomContent) => {
    return {
        type: FETCH_ROOM_CONTENT, 
        roomContent
    }
}