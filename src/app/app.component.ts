import { Component } from '@angular/core';
import { Item } from './classes/item';
import { Database } from './services/database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	initData: Item[] = [];

	constructor(private database: Database) {
	  this.initData = this.database.rootLevel;
	}
}
