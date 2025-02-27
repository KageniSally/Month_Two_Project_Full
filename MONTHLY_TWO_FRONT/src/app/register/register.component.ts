import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Route, Router, RouterModule } from '@angular/router';
import { AuthServiceService } from '../../Services/auth-service.service';
import { Store } from '@ngrx/store';
import { AppState } from '../State';
import { AuthActions } from '../State/Actions/auth.actions';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  form!:FormGroup

  errorPassword:string='Required'

  constructor(private fb:FormBuilder, private store:Store<AppState>,private router:Router){

  }

ngOnInit():void{
this.form=new FormGroup({
  name:this.fb.control(null,Validators.required),
  email:this.fb.control(null,[Validators.required,Validators.email]),
  password:this.fb.control(null,[Validators.required,this.passwordValidator.bind(this)])
})
}

onSubmit(){
// console.log(this.form)
// this.auth.registerUser(this.form.value).subscribe(res=>{
//   console.log(res.message)
//   this.router.navigate(['/login'])
// })
this.store.dispatch(AuthActions.register({user:this.form.value}))
}



passwordValidator(control:FormControl):{[x:string]:Boolean} | null{
    const value = control.value;
    if (value == undefined) {
      console.log('Value undefined')
      return  {passwordValidator :true} ; // Or handle this case as per your application's logic
    }
    let hasDigit = false;
    let hasLowerCase = false;
    let hasUpperCase = false;
    let hasSpecialChar = false;
 
    for (let i = 0; i < control.value.length; i++) {
      let charCode = control.value.charCodeAt(i);
 
      if (charCode >= 48 && charCode <= 57) {
        hasDigit = true;
      } else if (charCode >= 97 && charCode <= 122) {
        hasLowerCase = true;
      } else if (charCode >= 65 && charCode <= 90) {
        hasUpperCase = true;
      } else if (
        (charCode >= 33 && charCode <= 47) ||
        (charCode >= 58 && charCode <= 64) ||
        (charCode >= 91 && charCode <= 96) ||
        (charCode >= 123 && charCode <= 126)
      ) {
        hasSpecialChar = true;
      }// check patterns
    }
 
    if (hasDigit && hasLowerCase && hasUpperCase && hasSpecialChar){
      console.log('good control')
      return null
    }else{
      this.errorPassword='Invalid'
      console.log('bad control')
 
      return {passwordValidator :true}
    }
 
  }
}
 

