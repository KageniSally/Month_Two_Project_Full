import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LandingComponent } from './landing/landing.component';
import { UserHotelsComponent } from './user-hotels/user-hotels.component';
import { UserToursComponent } from './user-tours/user-tours.component';
import { UserBookingsComponent } from './user-bookings/user-bookings.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { Component } from '@angular/core';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminToursComponent } from './admin-tours/admin-tours.component';
import { AdminHotelsComponent } from './admin-hotels/admin-hotels.component';
import { AdminBookingsComponent } from './admin-bookings/admin-bookings.component';
import { AdminUsersComponent } from './admin-users/admin-users.component';
import { authGuard } from '../Guards/auth.guard';

export const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    {
        path: 'userDashboard', canActivate: [authGuard], children: [
            { path: '', component: UserToursComponent },
            { path: 'tours', component: UserToursComponent },
            { path: 'hotels', component: UserHotelsComponent },
            { path: 'bookings', component: UserBookingsComponent }
        ]
    },
    {
        path: 'adminDashboard', children: [
            { path: '', component: AdminDashboardComponent },
            { path: 'tours', component: AdminToursComponent },
            { path: 'hotels', component: AdminHotelsComponent },
            { path: 'bookings', component: AdminBookingsComponent },
            { path: 'users', component: AdminUsersComponent },
        ]
    }
];
