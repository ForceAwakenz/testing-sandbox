import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsideComponent } from './aside/aside.component';

export const asideRoutes: Routes = [
  {path: '', component: AsideComponent}
];

@NgModule({
  imports: [RouterModule.forChild(asideRoutes)],
  exports: [RouterModule]
})
export class AsideRoutingModule { }
