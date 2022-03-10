import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postData(data : any){
    return this.http.post<any>("http://localhost:3000/todos",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getData(){
    return this.http.get<any>("http://localhost:3000/todos")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  getResultData(){
    return this.http.get<any>("http://localhost:3000/result")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  updateData(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/todos/"+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteData(id:number){
    return this.http.delete<any>("http://localhost:3000/todos/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
