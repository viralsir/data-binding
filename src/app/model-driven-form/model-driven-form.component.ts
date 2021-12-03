import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {
  msg:string="";
  loginRef=new FormGroup({
    user:new FormControl("",[Validators.required,Validators.minLength(2)]),
    pass:new FormControl("",[Validators.required])
  });
  constructor() { }

  ngOnInit(): void {
  }

  checkUser(){
    //console.log(this.loginRef.value);
    let login=this.loginRef.value;
    if(login.user=="vimal" && login.pass=="123")
    {
      this.msg="login successfully";
    }
    else{
      this.msg="wrong username or password";
    }
  }

}
