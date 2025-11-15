import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css',
})
export class UserRegistrationComponent {
  user = {
    name: '',
    email: '',
    password: '',
    gender: 'male',
    terms: false,
  };

  onSubmit(form: any): void {
    console.log('Form submitted:', form.value);
  }
}
