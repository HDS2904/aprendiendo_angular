import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
	
	private API_KEY = 'BqoCcLGdiTS5It8Qdu6pQDMdplWyBvHH';
	private URL = 'api.giphy.com/v1/gifs/search';
	private _historial: string[] = [];

	public resultado: Gif[] = [];

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
		this.http.get<SearchGifsResponse>(`http://api.giphy.com/v1/gifs/search?api_key=BqoCcLGdiTS5It8Qdu6pQDMdplWyBvHH&q=${query}&limit=10`)
			.subscribe( (resp) => {
				console.log(resp.data);
				this.resultado = resp.data;
			})
  }
}
