import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {Pool} from '../pool'

@Injectable({
  providedIn: 'root'
})
export class PoolService {
  pool:Pool;
  private baseUri:string="http://localhost:3000";
  private headers = new HttpHeaders().set('Content-Type','application/json');
  constructor(private http:HttpClient) { }

  createPool(pool:Pool){
    return this.http.post(this.baseUri+'/create',pool,{headers:this.headers});
  }
  readPools(){
    return this.http.get(this.baseUri+'/read',{headers:this.headers});
  }
  updatePool(pool:Pool){
    return this.http.put(this.baseUri+'/update',pool,{headers:this.headers});
  }
  deletePool(id:string){
    return this.http.delete(this.baseUri+'/delete/'+id,{headers:this.headers});
  }
  deleteParticipant(pool:Pool){
    return this.http.put(this.baseUri+'/delParticipant/',pool,{headers:this.headers});
  }
  addParticipant(pool:Pool){
    return this.http.put(this.baseUri+'/addParticipant/',pool,{headers:this.headers});
  }

  setter(pool:Pool){
    this.pool=pool;
  }

  getter(){
    return this.pool;
  }
}
