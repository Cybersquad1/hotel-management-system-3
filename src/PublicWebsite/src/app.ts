import {Aurelia, autoinject} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';
import { Store } from 'redux';
import { IStore, store } from './redux';

@autoinject()
export class App {
  router: Router;
  store: Store<IStore>;
  
  constructor() {
    console.log(store);
    this.store = store;
  }

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Hotel Management System';

	config.map([
		{ route: ['', 'branding'], name: 'branding', moduleId: './branding/branding', nav: true, title: 'Home' },
		{ route: ['summary'], name: 'summary', moduleId: './modules/summary/summary' },
		{ route: ['confirmation'], name: 'confirmation', moduleId: './branding/confirmation' }
    ]);

    this.router = router;
  }
}
