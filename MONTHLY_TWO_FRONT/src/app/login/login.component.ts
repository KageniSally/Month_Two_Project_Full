import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthServiceService } from '../../Services/auth-service.service';
import { AppState } from '../State';
import { Store } from '@ngrx/store';
import { AuthActions } from '../State/Actions/auth.actions';
import { errorSelector } from '../State/Selectors/auth.selector';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  form!: FormGroup

  error$=this.store.select(errorSelector)
  message: string = ''
  constructor(private fb: FormBuilder, private router: Router,private store:Store<AppState>) { }
  ngOnInit(): void {
    this.form = new FormGroup({
      email: this.fb.control(null, [Validators.required, Validators.email]),
      password: this.fb.control(null, Validators.required)
    })
  }


  onSubmit() {
    // this.auth.loginUser(this.form.value).subscribe(res => {
    //   localStorage.setItem('token', res.token)
    //   const role_id = res.role_id
    //   localStorage.setItem('role_id', role_id.toString())
    //   const sub=res.sub
    //   localStorage.setItem('sub',sub.toString())
    //   console.log(res.message)
    //   this.message = res.message


    //   if (res.token) {
    //     setTimeout(() => {
    //       if (role_id === 2) {
    //         this.router.navigate(['adminDashboard'])
    //       } else {
    //         this.router.navigate([''])
    //         this.auth.login()
    //       }
    //     }, 2000)


    //   }
    // })

    this.store.dispatch(AuthActions.login({user:this.form.value}))


  }
}
