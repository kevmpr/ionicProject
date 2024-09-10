import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Proveedor1Service {
  [x: string]: any;
  constructor(
    public http: HttpClient
  ) { 
    console.log('Hola proveedor')
    
  }

  obtenerDatos() {
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }
}
