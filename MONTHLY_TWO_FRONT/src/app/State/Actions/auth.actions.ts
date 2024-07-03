import { createActionGroup, props } from "@ngrx/store";
import { LoginRequest, RegisterRequest, LoginResponse, RegisterResponse } from '../../../Models/userModel';

export const AuthActions = createActionGroup({
    source: "AUTH API",
    events: {
        'login': props<{ user: LoginRequest }>(),
        'login success': props<{ response: LoginResponse }>(),
        'login failure': props<{ message: string }>(),
        'register': props<{ user: RegisterRequest }>(),
        'register success': props<{ response: RegisterResponse }>(),
        'register failure': props<{ message: string }>()
    }
})