import { Component, OnInit } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [
  ]
})
export class ResultsComponent {

  get results() {
	return this.gifsService.resultado;
  }
  constructor(private gifsService: GifsService) { }

}
