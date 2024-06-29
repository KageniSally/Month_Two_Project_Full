// enum Role {
//     Admin = "admin",
//     Customer = "customer",
// }
export interface User {
    id: string,
    name: string,
    email: string,
    password: string,
    role_id: number,
    isEmailSent: number,
    isDeleted: number
}




export interface RegisterResponse {
    message: string
}
export interface LoginResponse {
    message: string,
    token: string,
    role_id: number,
    sub:number
}