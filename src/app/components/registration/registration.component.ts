import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;
  isFormSubmited: boolean = false;
  loading: boolean = false;

  constructor(private _fb: FormBuilder) {}

  ngOnInit(): void {
    this.registrationForm = this._fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      phoneNumber: [
        '',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.pattern('^[0-9]*$'),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.registrationForm.controls;
  }

  onSubmit() {
    this.isFormSubmited = true;
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      this.loading = true;
    }
  }
}
