import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/service/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  get historial(){
	  return this.gifsService.historial;
  }

  constructor(private gifsService:GifsService) { 
  }

  search( cadena: string): void {
	this.gifsService.searchGifs(cadena);
  }


}
