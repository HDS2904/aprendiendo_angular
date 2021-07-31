import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { FormsModule } from '@angular/forms';
import { CharactersComponent } from './characters/characters.component';

@NgModule({
  declarations: [
    HomeComponent,
    CharactersComponent
  ],
  exports:[
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
