import {autoinject, bindable} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import './room-content.css'

@autoinject()
export class RoomContentApiClient {
	content;
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

	fetch(response) {
		var idString = '';
		response.map((value, i) => {
			idString += 'ids=' + value;
			if (response.lastIndexOf(response.length) !== i) {
				idString += '&';
			}
		});

		let url = 'http://localhost:54831/api/collateral/roomtypes?' + idString;
		return this.httpClient
			.fetch(url)
			.then(response => {
				return response.json();
			});
	}
}