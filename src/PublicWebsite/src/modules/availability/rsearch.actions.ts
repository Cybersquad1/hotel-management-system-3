export const UPDATE_SEARCH_CRITERIA = 'UPDATE_SEARCH_CRITERIA';
export const SEARCH_AVAILABILITY = 'SEARCH_AVAILABILITY';
import { RsearchApiClient } from './rsearch.apiClient';

export const updateSearchCriteria = (selectedDates) => {
    return { 
        type: UPDATE_SEARCH_CRITERIA, 
        selectedDates
    }
}

export const fetchAvailability = (selectedDates) => {
    var researhcApiClient = new RsearchApiClient();

    return (dispatch) => {
        return researhcApiClient.getAvailability(selectedDates.checkin, selectedDates.checkout)
            .then(response => {
                let obj = { 
                    roomTypeIds: response,
                    shoppingCart: {
                        checkin:  selectedDates.checkin,
                        checkout: selectedDates.checkin
                }};
                dispatch(searchAvailability(obj))
            })
    }
}

export const searchAvailability = (shoppingCart) => {
    return {
        type: SEARCH_AVAILABILITY, 
        shoppingCart
    }
}