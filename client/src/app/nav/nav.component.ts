import { Component, inject } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { FormsModule } from '@angular/forms';
import { NgClass, NgIf } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@Component({
  selector: 'app-nav',
  imports: [FormsModule, NgIf, NgClass, BsDropdownModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
private accountService = inject(AccountService);

model: any = {};
loggedIn: boolean = false;

login(){
this.accountService.login(this.model).subscribe({
  next: (response: any) => {
    this.loggedIn = true;
  },
  error: (error: any) => {
    console.log(error);
  }
});
}
logout(){
  //this.accountService.logout();
  console.log('Logged out');
  this.loggedIn = false;
}
showPassword = false;

togglePassword() {
  this.showPassword = !this.showPassword;
}

}
