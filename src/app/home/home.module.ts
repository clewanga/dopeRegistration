import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SidenavOverviewComponent } from './sidenav-overview/sidenav-overview.component';




@NgModule({
  declarations: [SidenavOverviewComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
