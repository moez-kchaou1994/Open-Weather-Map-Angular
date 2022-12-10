import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MeteoService {
  
  key=environment.meteokey;
  host=environment.meteohost;

  constructor(private http:HttpClient) {
    
   }
   getmeteo1jour(ville:string){
      return this.http.get(this.host+'weather?q='+ ville + '&appid='+this.key)
  }
  getmeteo5jour(ville:string):Observable<any>{
    return this.http.get(this.host+'forecast?q='+ ville + '&appid='+this.key)
}
}
