import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
	
	private API_KEY = 'BqoCcLGdiTS5It8Qdu6pQDMdplWyBvHH';
	private URL = 'api.giphy.com/v1/gifs/search';
	private _historial: string[] = [];

  constructor( private http: HttpClient ) { }

  get historial() {
	return [...this._historial]
  }

  searchGifs(query: string = ''){
		query = query.trim().toLowerCase();
		if(!this._historial.includes(query)){
			this._historial.unshift(query);
			this._historial = this._historial.splice(0,10)
		}
		this.http.get('http://api.giphy.com/v1/gifs/search?api_key=BqoCcLGdiTS5It8Qdu6pQDMdplWyBvHH&q=dragon ball z&limit=10')
			.subscribe( (resp: any) => {
				console.log(resp.data);
			})
  }
}
