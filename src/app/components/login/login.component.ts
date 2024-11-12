import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm:FormGroup=new FormGroup({});

  constructor(private fb:FormBuilder,private router:Router){
    this.loginForm=this.fb.group({

  username:['',Validators.required],
  password:['',Validators.required]
})
}


checkLogin(){
  console.log(this.loginForm.value);
  if(this.loginForm.valid){
    if(this.loginForm.value.username=="admin"&& this.loginForm.value.password=="admin"){
      this.router.navigateByUrl("admin/cars");
      // localStorage.setItem("loggedin",JSON.stringify(this.loginForm.value));
    }
  

  else if(this.loginForm.value.password==this.loginForm.value.username.slice(0,3)+"123"){
    this.router.navigateByUrl("/user/cars");
    // localStorage.setItem("loggedin",JSON.stringify(this.loginForm.value));
  }
  else{
    alert("invaild credentials");

  }
}

  
}
};


