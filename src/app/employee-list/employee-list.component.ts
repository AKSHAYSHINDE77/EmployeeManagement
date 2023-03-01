import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{

  employees: Employee[]=[];

  constructor(private employeeService:EmployeeService,
     private router:Router) { }

  ngOnInit(): void {
   this.getEmployees();
  
  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe((data:any) =>{
      this.employees = data;
    });

    (error:HttpErrorResponse)=>{
      console.log(error)
    };
  }

  employeeDetails(id:number){
    this.router.navigate(['emaployee-details',id]);
  }

  updateEmployee(id: any){
    this.router.navigate(['update-employee',id]);
  }

  deleteEmployee(id:any){
    this.employeeService.deleteEmployee(id).subscribe((data:any) =>{
      console.log(data);
      this.getEmployees();
    })

  }

}
