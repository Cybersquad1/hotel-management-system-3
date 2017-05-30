import {autoinject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
var uniqid = require('uniqid');


@autoinject()
export class RsearchApiClient {
    httpClient;

	constructor() {
        this.httpClient = new HttpClient();

		this.httpClient.configure(config => {
			config
				.useStandardConfiguration()
				.withDefaults({
					headers: {
						'Accept': 'application/json'
					}
				});
		});
	}

	public getAvailability(checkin, checkout) {
		// shoppingCart.checkin = new Date(this.checkin);
		// shoppingCart.checkout = new Date(this.checkout);
		// shoppingCart.reservationUuid = uniqid();
		// shoppingCart.numberOfNights = new Date(shoppingCart.checkout.getTime() - shoppingCart.checkin.getTime()).getUTCDate() -1;

		let url = 'http://localhost:50673/api/' + 'RoomTypeAvailability?dates.startDate=' + checkin + '&dates.endDate=' + checkout;


		return this.httpClient.fetch(url)
			.then(response => {
				return response.json();
			});
	}
}