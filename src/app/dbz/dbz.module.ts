import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';

import { DbzServices } from './services/dbz.services';

import { FormsModule } from '@angular/forms';
import { CharactersComponent } from './characters/characters.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [
    HomeComponent,
    CharactersComponent,
    AddComponent
  ],
  exports:[
    HomeComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    DbzServices
  ]
})
export class DbzModule { }
