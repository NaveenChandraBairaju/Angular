import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-feedback-rating',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatButtonModule,
  ],
  templateUrl: './feedback-rating.component.html',
  styleUrls: ['./feedback-rating.component.css']
})
export class FeedbackRatingComponent {

  ratingControl = new FormControl(5);
  commentControl = new FormControl('');

  submitFeedback() {
    console.log('Rating:', this.ratingControl.value);
    console.log('Comment:', this.commentControl.value);

    alert(
      `Thanks for your feedback! (${this.ratingControl.value} stars)`
    );
  }
}