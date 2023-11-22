import { Component , inject} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { LayoutService } from 'src/app/shared/layout/services/layout.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  layoutService  = inject(LayoutService);
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
