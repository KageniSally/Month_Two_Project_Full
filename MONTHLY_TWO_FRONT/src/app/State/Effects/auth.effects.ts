import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { AuthServiceService } from "../../../Services/auth-service.service";
import { AuthActions } from "../Actions/auth.actions";
import { catchError, concatMap, map, of } from "rxjs";
import { Router } from "@angular/router";


@Injectable()


export class AuthEffects {
    constructor(private actions$: Actions, private auth: AuthServiceService, private router: Router) { }

    loginUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.login),
            concatMap(({ user }) => this.auth.loginUser(user).pipe(
                map(res => {
                    localStorage.setItem('token', res.token)
                    const role_id = res.role_id
                    localStorage.setItem('role_id', role_id.toString())
                    const sub = res.sub
                    localStorage.setItem('sub', sub.toString())
                    console.log(res.message)



                    if (res.token) {
                        setTimeout(() => {
                            if (role_id === 2) {
                                this.router.navigate(['adminDashboard'])
                            } else {
                                this.router.navigate([''])
                                this.auth.login()
                            }
                        }, 2000)


                    } else {
                        console.log("Could not find token")
                    }
                    // this.router.navigate([''])
                    return AuthActions.loginSuccess({ response: res })
                }),
                catchError(error => of(AuthActions.loginFailure({ message: error.error.message })))
            )

            ))

    })


    registerUser$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(AuthActions.register),
            concatMap(req => this.auth.registerUser(req.user).pipe(
                map(res => {
                    this.router.navigate(['/login'])
                    return AuthActions.registerSuccess({ response: res })
                }),
                catchError(error => of(AuthActions.registerFailure({ message: error.error.message })))
            )
            ))

    })
}
