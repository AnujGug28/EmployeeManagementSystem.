import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  @Input() employee: Employee;
  @Output() onRemoveEmployee = new EventEmitter<number>();
  
  constructor() {
    this.employee= {
      firstname: '',
      lastname: '',
      age: '',
      department: '',
      bloodgroup:'',
      address:'',
      alternateaddress:'',
      phoneno: 0,
      alternatephoneno: 0,
    };
  }
  ngOnInit(): void{
    console.log(this.employee);
  }
  deleteEmployeeClicked() {
    this.onRemoveEmployee.emit(this.employee.id);
  }

}
