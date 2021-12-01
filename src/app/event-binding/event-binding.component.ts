import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  msg:string="";
  f1:boolean=true;
  f2:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }

  func(){
    this.msg="welcome to Angular projects";
    this.f1=false;
    this.f2=false;
    console.log("button in clicked and func() is called");
    console.log(this.msg);
  }

}
