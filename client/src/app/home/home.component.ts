import { Component, inject, OnInit } from '@angular/core';
import { RegisterComponent } from "../register/register.component";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  [x: string]: any;
  cancelRegisterMode(event: boolean) {
    this.registeredMode = event;
    console.log(event);
  }
  registeredMode = false;
  http = (inject(HttpClient));
  title = 'Dating App';
  users: any;
  regsterToggle() {
    this.registeredMode = !this.registeredMode;
  }

  ngOnInit(): void {
    this.getUsers();
  }
  getUsers() {
    this.http.get('https://localhost:5001/api/users').subscribe({
      next: response => this.users = response,
      error: error => console.log(error),
      complete: () => console.log('Request has completed')
    });
  }

}
