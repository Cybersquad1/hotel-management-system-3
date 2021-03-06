﻿import {autoinject} from 'aurelia-framework';
import {HttpClient, json} from 'aurelia-fetch-client';
import {EventAggregator} from 'aurelia-event-aggregator';
var uniqid = require('uniqid');
import shoppingCart from "../../shoppingCart";

const Events = {
  BookRoom: 'BookRoom',
  GuestSubmitted: 'GuestSubmitted'
}


@autoinject()
export class Guests {
	guestUuid = uniqid();
  reservationUuid = shoppingCart.reservationUuid;
	title = 'Mr';
	firstName = 'John';
	lastName = 'Smith';
  email = 'john.smith@email.com';
  line1 = '1234 Main st';
  city = "Denver";
  state = 'CO';
  zip = '80202';

	constructor(private httpClient: HttpClient, private messageBus: EventAggregator) {
		this.messageBus.subscribe(Events.BookRoom, () => {
			this.submitGuest();
		});
	}

	submitGuest() {
    let url = 'http://localhost:50551/api/guests';
    let body = this.createGuestPayload();

		this.sendGuestRequest(url, body);
	}

	private createGuestPayload() {
		return	{
							"guestUuid": this.guestUuid,
							"reservationUuid": shoppingCart.reservationUuid,
							"title": this.title,
							"firstName": this.firstName,
							"lastName": this.lastName,
							"email": this.email,
							"address": {
								"line1": this.line1,
								"city": this.city,
								"state": this.state,
								"zip": this.zip
	    			}
	  }
	}

	private sendGuestRequest (url, body) {
		this.httpClient.fetch(url, {
			method: 'PUT',
			body: json(body)
		})
		.then(response => response.json())
		.then(data => {
      this.messageBus.publish(Events.GuestSubmitted);
		});
	}
}