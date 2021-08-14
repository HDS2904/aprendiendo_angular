import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-searches',
  templateUrl: './searches.component.html',
  styles: [
  ]
})
export class SearchesComponent implements OnInit {
	// "!": Permite asegurar que la variable nunca será indefinida
	@ViewChild("inputText") inputText!: ElementRef<HTMLInputElement>

  constructor() { }

  ngOnInit(): void {
  }

  search(){
	console.log("Valor: ", this.inputText.nativeElement.value );
	this.inputText.nativeElement.value = ''
  }

}
