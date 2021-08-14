import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../service/gifs.service';

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styles: [
  ]
})
export class SearchesComponent implements OnInit {
	// "!": Permite asegurar que la variable nunca será indefinida
	@ViewChild("inputText") inputText!: ElementRef<HTMLInputElement>

  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }

  search() {
	const value = this.inputText.nativeElement.value;
	this.gifsService.searchGifs(value);
	console.log(this.gifsService.historial);
	this.inputText.nativeElement.value = '';
  }

}
