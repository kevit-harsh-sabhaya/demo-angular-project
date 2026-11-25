import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HousingLocationInfo } from '../housinglocation';

@Component({
  imports: [RouterLink],
  selector: 'app-housing-location',
  styleUrl: './housing-location.css',
  templateUrl: './housing-location.html',
})
export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
