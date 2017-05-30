import {autoinject} from 'aurelia-framework';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { availabilityReducer } from './rsearch.reducer';
import {searchAvailability, fetchAvailability} from './rsearch.actions';
import { store } from '../../redux/store'

var uniqid = require('uniqid');

@autoinject()
export class Rsearch {
	checkin = '8/1/2017';
	checkout = '8/5/2017';
    xcheckin;
	xcheckout;
    uuid;

	constructor() {
        store.subscribe(this.updateViewFromState.bind(this))
	}

	search() {
        store.dispatch(searchAvailability(uniqid()))
	}

    update() {
        const selectedDates = {
            checkin: this.checkin,
            checkout: this.checkout
        }

        store.dispatch(fetchAvailability(selectedDates))
    }

    updateViewFromState() { 
        console.log('search view update')
        let shoppingCart = store.getState().shoppingCart;
        let roomTypeIds = store.getState().roomTypeIds;
        console.log(roomTypeIds)

        this.xcheckin = shoppingCart.checkin;
        this.xcheckout = shoppingCart.checkin;
        this.uuid = roomTypeIds;
    }
}