import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.css']
})
export class EmployeeLoginComponent {

  userName=""
  password=""
  constructor(private route:Router){}
  readValues=()=>
  {
    let data:any={"userName":this.userName,"password":this.password}
    console.log(data);
    if (this.userName=="1122"&&this.password=="12345") {
      alert("valid login")
      this.route.navigate(['/addfriends'])
    } else {
      alert("Invalid credentials")
    }

    
  }
}
