import { Component } from '@angular/core';
import { Home } from './home/home';
import { HousingLocation } from './housing-location/housing-location';
import { HousingLocationInfo } from './housinglocation';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
 imports: [ RouterOutlet, RouterLink],
  styleUrls: ['./app.css'],
  templateUrl: './app.html',
})
export class App {
  title = 'homes';
}
