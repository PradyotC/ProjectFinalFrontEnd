import { Component, OnInit } from '@angular/core';
import { Register } from '../../shared/models/register';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Regx } from './regx';
import { RegisterServices } from '../../shared/services/register.services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public userForm:FormGroup;
  public submitted:boolean = false;
  public tccheck:boolean = false;
  constructor(private fb: FormBuilder, private registerServices: RegisterServices) {}

  public Save(data:Register){
    console.log(data);
    this.submitted = true;
    if (!this.userForm.valid) {
      return;
    }
    this.registerServices.UserRegister(data).subscribe(data => {
      console.log(data); 
      alert(data['message']);
      location.replace('http://localhost:4200/login');
    });
  }

  ngOnInit() {
    
    if(localStorage.getItem('currentUser'))
    {
      location.replace('http://localhost:4200/');
    }
  
    this.userForm = this.fb.group({
    'firstName':['',[Validators.required,Regx.Name]],
    'lastName':['',[Validators.required,Regx.Name]],
    'newsLetterCheck':[false,[Validators.required]],
    'UserLogin':this.fb.group({
        'userEmail': ['',[Validators.required,Regx.Email]],
        'userPassword': ['',[Validators.required,Regx.Password]]
    }),
    'address': ['',[Validators.required]],
    'termsAcceptCheck':['',[Validators.required]]
    });
  }

}
