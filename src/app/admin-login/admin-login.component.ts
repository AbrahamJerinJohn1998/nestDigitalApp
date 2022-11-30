import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  userName=""
  password=""
  constructor(private route:Router)
  {}
  readValues=()=>
  {
    let data:any={"userName":this.userName,"password":this.password}
    console.log(data);
    if (this.userName=="admin"&&this.password=="Nestdigital") {
      alert("valid login")
      this.route.navigate(['/viewfriends'])
      
    } else {
      alert("Invalid credentials")
    }

    
  }
  
}
