import { NgFor } from '@angular/common';
import { Component, EventEmitter, Input, input, NgModule, Output, output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule,NgFor],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
usersFromHomeComponent = input.required<any>();
@Output() cancelRegister = new EventEmitter<boolean>();


cancel() {
  this.cancelRegister.emit(false);
  console.log('cancelled');
}
model: any = {};
register() {
  console.log(this.model);
  console.log('registering...');
  // this.http.post('https://localhost:5001/api/account/register', this.registerModel).subscribe({
  //   next: response => console.log(response),
  //   error: error => console.log(error),
  //   complete: () => console.log('Request has completed')
  // });  

}
}