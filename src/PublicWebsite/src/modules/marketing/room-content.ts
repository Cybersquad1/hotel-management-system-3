import {autoinject, bindable} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import ReduxThunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import { RoomContentApiClient } from './room-content.apiClient';
import { store } from '../../redux/store';
import './room-content.css'



@autoinject()
export class RoomContent {
	private roomTypeIds: Array<number>;
	content;

	constructor(private apiClient: HttpClient) {
		console.log("room-content");
		store.subscribe(this.makeApiRequest)
	}

	makeApiRequest() {
		let roomTypeIds = store.getState().roomTypeIds;

		if(roomTypeIds != undefined || roomTypeIds != this.roomTypeIds){
			var apiClient = new RoomContentApiClient()
			apiClient.fetch(roomTypeIds);
			this.roomTypeIds = roomTypeIds;
		}
	}
}