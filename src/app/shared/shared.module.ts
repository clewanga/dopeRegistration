import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';

@NgModule({
  declarations: [],

  imports: [
    CommonModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule

  ],
   exports: [MatButtonModule,MatSidenavModule,MatListModule

  ]
})
export class SharedModule { }
