import { LiveAnnouncer } from '@angular/cdk/a11y';
import { createComponentDefinitionMap } from '@angular/compiler/src/render3/partial/component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MeteoComponent } from './meteo/meteo.component';


const routes: Routes = [

  {path: "menu",component:MenuComponent},
 
  {path: "",component:MeteoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
