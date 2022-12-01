import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeLoginComponent } from './employee-login/employee-login.component';
import { EmployeeRegComponent } from './employee-reg/employee-reg.component';
import { NavbarHomeComponent } from './navbar-home/navbar-home.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddFriendsComponent } from './add-friends/add-friends.component';
import { NavbarEmployeeComponent } from './navbar-employee/navbar-employee.component';
import { ViewFriendsComponent } from './view-friends/view-friends.component';
import { ViewCoursesComponent } from './view-courses/view-courses.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
const myRoute:Routes=[
  {
    path:"",
    component:HomePageComponent
  },
  {
    path:"adminlogin",
    component:AdminLoginComponent
  },
  {
    path:"employeereg",
    component:EmployeeRegComponent
  },
  {
    path:"employeelogin",
    component:EmployeeLoginComponent
  },
  {
    path:"addfriends",
    component:AddFriendsComponent
  },
  {
    path:"addcourses",
    component:AddCourseComponent
  },
  {
    path:"viewfriends",
    component:ViewFriendsComponent
  },
  {
    path:"viewcourses",
    component:ViewCoursesComponent
  },
  {
    path:"gallery",
    component:GalleryComponent
  },
  {
    path:"aboutus",
    component:AboutUsComponent
  },
  {
    path:"contactus",
    component:ContactUsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminLoginComponent,
    EmployeeLoginComponent,
    EmployeeRegComponent,
    NavbarHomeComponent,
    AddCourseComponent,
    AddFriendsComponent,
    NavbarEmployeeComponent,
    ViewFriendsComponent,
    ViewCoursesComponent,
    NavbarAdminComponent,
    GalleryComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
