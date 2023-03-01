import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

   baseURL= "http://localhost:8080/api/v1/";

  constructor( private httpClient:HttpClient) { }

  getEmployeeList():Observable<Employee[]>{
    return this.httpClient.get<Employee[]>(this.baseURL+"employees");
  }

  createEmployee(employee:Employee):Observable<object>{
    return this.httpClient.post(this.baseURL+"employees",employee);
  }

 getEmployeeById(id:number): Observable<Employee>{
  return this.httpClient.get<Employee>(this.baseURL+"id");
 }

 updateEmployee(id:number, employee:Employee):Observable<Object>{
  return this.httpClient.put(this.baseURL+"id",id);
 }

 deleteEmployee(id:number):Observable<Object>{
  return this.httpClient.delete(this.baseURL+"id");
 }
}
