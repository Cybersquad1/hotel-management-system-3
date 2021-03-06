﻿import {EventAggregator} from 'aurelia-event-aggregator'
import {autoinject, bindable} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';

const Events = {
  RatesFetched: 'RatesFetched'
}

@autoinject()
export class Rates {
	@bindable roomTypeId;
	rate;

	constructor(private messageBus: EventAggregator, private apiClient: HttpClient) {
		this.messageBus.subscribe(Events.RatesFetched, response => {
			console.log("rates fetched subscribed"); 
			this.rate = this.getRate(response);
		});
	}

	getRate(response) {
		return response.filter(match => {
			return this.roomTypeId === match.RoomTypeId;
		})[0];
	}
}