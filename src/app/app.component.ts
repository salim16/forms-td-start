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
  genders: string[] = ['Male', 'Female'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  @ViewChild('f', {static: false}) signUpForm: NgForm;
  // static true is used when we use these references inside ngOnInit
  @ViewChild('e', {static: false}) emailElement: NgForm;

  suggestUserName() {
    const suggestedName = 'Superuser';
    // with setValue method we need to set the value for the whole form at once whereas
    // patchValue() method only overrrides the properties passed to override.
    
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
        nameOfUser: suggestedName
      }
    });
  }

  /*onSubmit(form: NgForm) {

     console.log(form);
  }*/

  onSubmit() {
    console.log(this.signUpForm);
    console.log(this.emailElement);
    this.submitted = true;
    this.user.username = this.signUpForm.value.userData.nameOfUser; // name attribute of the element
    this.user.email = this.signUpForm.value.userData.emailofuser; // email attribute of the element
    this.user.secretQuestion = this.signUpForm.value.secret;
    this.user.answer = this.signUpForm.value.questionAnswer;
    this.user.gender = this.signUpForm.value.gender;

    this.signUpForm.reset(); // reset also removes all the controls, classes of angular and everthing,
    // it is as if the page is loaded for the first time 
  }
}
