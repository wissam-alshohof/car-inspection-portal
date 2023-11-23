import { animate, style, transition, trigger } from '@angular/animations';
import { Component , inject} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LayoutService } from 'src/app/shared/layout/services/layout.service';
import { leftUp190, leftUp300 } from 'src/app/shared/utils/transitions';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  animations: [
    leftUp190,leftUp300
  ]
})
export class RegisterComponent {
  layoutService  = inject(LayoutService);
  onLogin = false;
  form = this.fb.group({
    username: this.fb.control('',[Validators.required]),
    email: this.fb.control('',[Validators.required, Validators.email]),
    password: this.fb.control('',[Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)]),
  });
  constructor(private fb: FormBuilder) {}

  register() {
    this.layoutService.applyBlur$.next(true);
  }
}
