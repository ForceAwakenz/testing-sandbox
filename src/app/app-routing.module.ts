import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

export const routes: Routes = [
  {path: '', loadChildren: () => import('./aside/aside.module').then(m => m.AsideModule)},
]

@NgModule(
  {
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  }
)
export class AppRoutingModule {}