import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { LayoutService } from 'src/app/shared/layout/services/layout.service';
import { leftUp270, leftUp380, fadeOut } from 'src/app/shared/utils/transitions';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    leftUp270, leftUp380, fadeOut
  ]
})
export class RegisterComponent implements OnDestroy, OnInit {
  layoutService = inject(LayoutService);
  onLogin = false;
  form = this.fb.group({
    username: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]),
    password: this.fb.control(''),
  });
  constructor(private fb: FormBuilder, private auth: AuthService, private router:Router) { }

  ngOnInit(): void {
    this.form.controls.password.addValidators([Validators.required, passwordValidator(this.form.controls.password)])
  }

  toggleForm() {
    this.layoutService.applyBlur$.next(!(this.layoutService.applyBlur$.value));
  }
  login() {
    if (this.form.controls.email.value && this.form.controls.password.value) {
      this.auth.signIn(this.form.controls.email.value, this.form.controls.password.value).then(_ => this.router.navigate(['dashboard']))
    }
  }
  signup() {
    if (this.form.controls.email.value && this.form.controls.password.value && this.form.controls.username.value) {
      this.auth.signup(this.form.controls.email.value, this.form.controls.password.value, this.form.controls.username.value).then(
        _ => this.onLogin =true
      )
    }
  }
  reset() {
    this.onLogin = false;
    this.form.reset();
    this.layoutService.applyBlur$.next(false)
  }
  ngOnDestroy(): void {
    this.reset();
  }
}

function passwordValidator(passwordControl: AbstractControl): ValidatorFn {
  return (): ValidationErrors | null => {
    const [minMaxLength, containNumber, lowerAndUpperCase, specialCharacter ] = [/^.{8,16}$/,/^(?=.*[0-9]).{1,}$/,/^(?=.*[a-z])(?=.*[A-Z]).{1,}$/, /^(?=.*[!@#$%^&*]).{1,}$/]
    if(!passwordControl.value?.match(minMaxLength)) return {password: "Password length should be between 8 and 16 characters"}
    if(!passwordControl.value?.match(containNumber)) return {password: "Password should has at least on number"}
    if(!passwordControl.value?.match(lowerAndUpperCase)) return {password: "Password should has at least one small letter and one capital"}
    if(!passwordControl.value?.match(specialCharacter)) return {password: "Password should has at least on special character"}
    return null;
  }

}