import { Component, OnInit } from '@angular/core';
import { User } from '../../Models/userModel';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from '../../Services/auth-service.service';

@Component({
  selector: 'app-admin-users-display',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-users-display.component.html',
  styleUrl: './admin-users-display.component.css'
})
export class AdminUsersDisplayComponent implements OnInit{
  users: User[] = []
  user:User[]=[]
  message!:string

  constructor(private auth:AuthServiceService){

  }

  ngOnInit(): void {
   this.auth.getUsers().subscribe(res=>{
    this.users=res

  
   })
  }

  


  deleteUser(user:User){
    if (user.id) {
      this.auth.deleteUser(user.id).subscribe(
        res => {
          this.message = res.message;
          this.users = this.users.filter(t => t.id !== user.id);
        },
        error => {
          console.error('Error deleting tour:', error);
        }
      );
    } else {
      console.error('User ID is undefined or null');
    }
  }

}
