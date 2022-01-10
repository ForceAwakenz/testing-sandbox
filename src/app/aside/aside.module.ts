import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AsideRoutingModule } from './aside-routing.module';
import { AsideComponent } from './aside/aside.component';
import { SecondaryComponent } from './secondary/secondary.component';


@NgModule({
  declarations: [
    AsideComponent,
    SecondaryComponent
  ],
  imports: [
    CommonModule,
    AsideRoutingModule
  ]
})
export class AsideModule { }
