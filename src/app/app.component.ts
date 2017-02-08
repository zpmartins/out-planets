import { Component, OnInit } from '@angular/core';
import { Planets, PlanetsService } from './shared';

@Component({
  selector: 'Planets-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  planetList: Planets[] = [];
  selectedPlanet: Planets;

  constructor(private planetService: PlanetsService) { }
  
  ngOnInit() {
    this.planetService.getPlanets().then(planets => this.planetList = planets);
  }

  showPlanetInfo(selPlanet) {
    this.selectedPlanet = selPlanet;
  }
}
