import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent {

  user = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.minLength(3)]),
    password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(15)]),
    email: new FormControl('',Validators.email),
    age: new FormControl('',[Validators.required,Validators.min(18),Validators.max(40)])
  })

  registeruser() {
    console.log(this.user.value);
    }
}
