import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {

  userName=""
  password=""
  readValues=()=>
  {
    let data:any={"userName":this.userName,"password":this.password}
    console.log(data);
    if (this.userName=="1122"&&this.password=="12345") {
      alert("valid login")
      
    } else {
      alert("Invalid credentials")
    }

    
  }
}
