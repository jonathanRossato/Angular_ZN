import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http'
import {Cliente} from '../models/cliente';
import { HttpHeaders } from '@angular/common/http';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'  
  })
};

@Injectable({
  providedIn: 'root'
})
export class CadastroClienteService {

  constructor(private http: HttpClient) { }

  listarCadastros(): Observable<any> {
    return this.http.get("https://localhost:44391/CadastroClienteZN");    
  }

  AtualizarCadastro(cliente:Cliente) {
    let params = new HttpParams().set('cliente',JSON.stringify(cliente))
    let headers = new HttpHeaders().set('Content-Type',  'application/json')
    
      this.http.post('https://localhost:44391/CadastroClienteZN/AlterCliente', cliente, {params,headers}).subscribe(results=>{console.log(results)})
  }

  public criarCadastro(cliente: Cliente){
    let params = new HttpParams().set('cliente',JSON.stringify(cliente))
    let headers = new HttpHeaders().set('Content-Type',  'application/json')

    return this.http.post('https://localhost:44391/CadastroClienteZN/CriarCliente', cliente, {params,headers});
  }

  public deletarCadastro(cliente:Cliente) {
    let params = new HttpParams().set('cliente',JSON.stringify(cliente))
    let headers = new HttpHeaders().set('Content-Type',  'application/json')
  
     return this.http.post('https://localhost:44391/CadastroClienteZN/DeletarCliente', cliente, {params,headers});
  }

}
