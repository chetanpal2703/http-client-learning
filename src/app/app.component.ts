import { Component, OnInit } from '@angular/core';
import { UserService } from './service/user.service';
import { Observable } from 'rxjs';
import { User } from './interface/user';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'http-client';
  
  private user:User=
  {
      
      'name': 'shivam singh',
      'username': 'Bret',
      'email': 'Sincere@april.biz',
      'address': {
        'street': 'Kulas Light',
        'suite': 'Apt. 556',
        'city': 'Gwenborough',
        'zipcode': '92998-3874',
        'geo': {
          'lat': '-37.3159',
          'lng': '81.1496'
        }
      },
      'phone': '1-770-736-8031 x56442',
      'website': 'hildegard.org',
      'company': {
        'name': 'Romaguera-Crona',
        'catchPhrase': 'Multi-layered client-server neural-net',
        'bs': 'harness real-time e-markets'
      }
  }
  
  constructor(private userService:UserService){

  }
  ngOnInit(): void {
      this.onGetUsers();
      this.onGetUser();
      this.onCreateUser();
  }

  // onGetUsers():any{
  //   this.userService.getUsers().subscribe(
  //     (next)=>{console.log(next,'this is next')
  //             return next;},
  //     // (responce)=>console.log(responce),
  //     (error)=>console.log(error),
  //     ()=>console.log('Done getting user')
  //   )
  // }

  onGetUsers(): any {
    this.userService.getUsers().subscribe({
      next: (data: User[]) => {
        console.table(data);
        console.log('using the next methood for observable');
        return data;
        // Handle the next value here
      },
      error: (err: any) => {
        console.error(err);
        // Handle errors here
      },
      complete: () => {
        console.log('Done getting user');
        
        // Handle completion here
      }
    });
  }

  onGetUser():any{
    this.userService.getUser().subscribe(
      (responce)=>{console.log(responce,'this is next')
              return responce;},
      // (responce)=>console.log(responce),
      (error)=>console.log(error),
      ()=>console.log('Done getting user')
    )
  }

  onCreateUser():any{
    this.userService.createUser(this.user).subscribe(
      (responce)=>{console.log(responce,'this is creating user post request');},
      // (responce)=>console.log(responce),
      (error)=>console.log(error),
      ()=>console.log('Done getting user')
    )
  }


  
}
