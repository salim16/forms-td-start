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
    // setValue method sets the value for the whole form at once whereas
    // pathValue() method only overrrides the properties passed to override.

    // this.signUpForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'Male'
    // });

    this.signUpForm.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signUpForm);
    console.log(this.emailElement);
  }
}
