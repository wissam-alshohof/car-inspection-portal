import { Component, OnDestroy, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LayoutService } from 'src/app/shared/layout/services/layout.service';
import { leftUp190, leftUp300 } from 'src/app/shared/utils/transitions';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    leftUp190, leftUp300
  ]
})
export class RegisterComponent implements OnDestroy {
  layoutService = inject(LayoutService);
  onLogin = false;
  form = this.fb.group({
    username: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required, Validators.email]),
    password: this.fb.control('', [Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
  });
  constructor(private fb: FormBuilder, private auth: AuthService, private router:Router) { }

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

  ngOnDestroy(): void {
    this.onLogin = false;
    this.layoutService.applyBlur$.next(false)
  }
}
