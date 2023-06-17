import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Employee } from './models/employee.model';
import { EmployeeService } from './services/employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('fileInput') fileInput: any;
  
  title = 'Employee-Management-System';

  employeeForm!: FormGroup;
  employees: Employee[];
  employeesToDisplay: Employee[];
  FirstName: any;
  LastName: any;
  Age: any;
  Department: any;
  BloodGroup: any;
  Address: any;
  AlternateAddress: any;
  PhoneNo: any;
  AlternatePhoneNo: any;
  


  constructor(private fb: FormBuilder, private employeeService: EmployeeService) {
    this.employeeForm= fb.group({});
    this.employees= [];
    this.employeesToDisplay= this.employees;


  }
  ngOnInit(): void {
    this.employeeForm= this.fb.group({
      firstname: this.fb.control(''),
      lastname: this.fb.control(''),
      age: this.fb.control(''),
      department: this.fb.control(''),
      bloodgroup: this.fb.control(''),
      address: this.fb.control(''),
      altenateaddress: this.fb.control(''),
      phoneno: this.fb.control(''),
      alternatephoneno: this.fb.control(''),

    });
    this.employeeService.getEmployee().subscribe((res: any) =>{ 
      for(let emp of res) {
        this.employees.unshift(emp);
      }
      this.employeesToDisplay = this.employees;
    });
  }
  ngAfterViewInit(): void {
    //this.buttontemp.nativeElement.click();
      
  }
  addEmployee(){
    let employee: Employee={
      firstname: this.FirstName.value,
      lastname: this.LastName.value,
      age:this.Age.value ,
      department: this.Department.value,
      bloodgroup: this.BloodGroup.value,
      address: this.Address.value,
      alternateaddress: this.AlternateAddress.value,
      phoneno: this.PhoneNo.value,
      alternatephoneno: this.AlternatePhoneNo.value,
    }
    this.employeeService.getEmployee().subscribe((res)=> {
      for(let emp of res) {
        this.employees.unshift(emp);
      }
      this.employeesToDisplay = this.employees;
      
      

    });

  }
 

  
  clearForm(){
    this.FirstName.setValue('');
    this.LastName.setValue('');
    this.Age.setValue('');
    this.Department.setValue('');
    this.BloodGroup.setValue('');
    this.Address.setValue('');
    this.AlternateAddress.setValue('');
    this.PhoneNo.setValue('');
    this.AlternatePhoneNo.setValue('');
    

  }
  public get Firstname(): FormControl {
    return this.employeeForm.get('firstname') as FormControl;
  }
  public get Lastname(): FormControl {
    return this.employeeForm.get('lastname') as FormControl;
  }
  public get age(): FormControl {
    return this.employeeForm.get('age') as FormControl;
  }
  public get department(): FormControl {
    return this.employeeForm.get('department') as FormControl;
  }
  public get bloodGroup(): FormControl {
    return this.employeeForm.get('bloodgroup') as FormControl;
  }
  public get address(): FormControl {
    return this.employeeForm.get('address') as FormControl;
  }
  public get alternateAddress(): FormControl {
    return this.employeeForm.get('alternateaddress') as FormControl;
  }
  public get phoneNo(): FormControl {
    return this.employeeForm.get('phoneno') as FormControl;
  }
  public get alternatePhoneNo(): FormControl {
    return this.employeeForm.get('alternatephoneno') as FormControl;
  }
}



function clearForm() {
  throw new Error('Function not implemented.');
}

function FirstName() {
  throw new Error('Function not implemented.');
}

function LastName() {
  throw new Error('Function not implemented.');
}

function Age() {
  throw new Error('Function not implemented.');
}

function Department() {
  throw new Error('Function not implemented.');
}

function BloodGroup() {
  throw new Error('Function not implemented.');
}

function Address() {
  throw new Error('Function not implemented.');
}

function AlternateAddress() {
  throw new Error('Function not implemented.');
}

function PhoneNo() {
  throw new Error('Function not implemented.');
}

function AlternatePhoneNo() {
  throw new Error('Function not implemented.');
}

