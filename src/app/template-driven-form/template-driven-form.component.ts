import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
   msg:string="";
  constructor() { }

  ngOnInit(): void {
  }

  checkUser(loginformRef:NgForm){
    //console.log(loginformRef.value);
    let login=loginformRef.value;
    if(login.user=="vimal" && login.pass=="123")
    {
      this.msg="login successfully";
    }
    else{
      this.msg="wrong username or password";
    }
    loginformRef.reset();
  }

}
