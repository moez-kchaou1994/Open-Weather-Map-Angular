import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; //service
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';

import { MeteoComponent } from './meteo/meteo.component';
import { MenuComponent } from './menu/menu.component';
import { defaultSimpleModalOptions, SimpleModalModule,DefaultSimpleModalOptionConfig } from 'ngx-simple-modal';
import { CommonModule } from "@angular/common";
import { NgSelect2Module} from 'ng-select2';





@NgModule({
  declarations: [
    
    AppComponent,
  
    MenuComponent,
   
    MeteoComponent,
   
    
    
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    DataTablesModule,
    HttpClientModule,
    AppRoutingModule,
    NgSelect2Module,
    MatSliderModule,
    FormsModule,
    SimpleModalModule.forRoot({container: 'modal-container'}, {...defaultSimpleModalOptions, ...{
      closeOnEscape: true,
      closeOnClickOutside: true,
      wrapperDefaultClasses: 'o-modal o-modal--fade',
      wrapperClass: 'o-modal--fade-in',
      animationDuration: 300,
      autoFocus: true
    }}),
    
    
    BrowserAnimationsModule
  ],
  providers: [{
    provide: DefaultSimpleModalOptionConfig,
    useValue: {...defaultSimpleModalOptions, ...{ closeOnEscape: true, closeOnClickOutside: true }}
  }],
  entryComponents: [
   // AjoutarticleComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
