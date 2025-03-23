import { Component } from '@angular/core';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent {

  user= {username:"", password:""};

  userlogin(form:any) {
    console.log(form.value);
    
    }
}
