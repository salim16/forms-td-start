import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  defaultQuestion = "teacher";
  answer : '';
  genders: string[] = ['Male', 'Female']

  @ViewChild('f', {static: true}) signUpForm: NgForm;
  @ViewChild('e', {static: true}) emailElement: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signUpForm);
    console.log(this.emailElement);
  }
}
