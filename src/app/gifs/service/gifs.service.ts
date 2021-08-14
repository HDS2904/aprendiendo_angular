import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

	private _listData: string[] = [];

  constructor() { }

  get lisData() {
	return [...this._listData]
  }

  searchGifs(query: string){
	return this._listData.unshift(query);
  }
}
