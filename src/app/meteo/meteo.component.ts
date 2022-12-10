import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';
import { MeteoService } from '../services/meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit {
  ville:any;
  info:any;
  weather5:any=[];
  constructor(private meteoserv:MeteoService)
   { }

  ngOnInit(): void {
  }
chargermeteo1jour(){
  this.info=null;
  this.meteoserv.getmeteo1jour(this.ville).subscribe(data=>this.info = data);}

chargermeteo5jour(){
  this.info=null;
  this.meteoserv.getmeteo5jour(this.ville).subscribe(data=>this.affichage(data)),(err:any)=>{console.log(err)}
}
affichage(data:any){
  for(let i=0;i<data.list.length;i=i+1){
    this.weather5.push(data.list[i])}
    console.log(this.weather5)

  }
}

