import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InspectionService } from '../../inspection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-inspection',
  templateUrl: './new-inspection.component.html',
  styleUrls: ['./new-inspection.component.scss']
})
export class NewInspectionComponent {

  form = this.fb.group({
    make: this.fb.control('', [Validators.required]),
    model: this.fb.control('', [Validators.required]),
    year: this.fb.control(null, [Validators.required]),
    comments: this.fb.control(''),
    date: this.fb.control(null, [Validators.required]),
  })
  constructor(
    private fb: FormBuilder, 
    private inspectionService: InspectionService,
    private router: Router) { }

  submit() {
    this.inspectionService.addInspection(dataAdapter(this.form)).then(
      _ => this.router.navigate(['/dashboard'])
    );
    this.form.reset();
  }
}

function dataAdapter(formGroup: FormGroup) {
  const data: any = {};
  for (let key of Object.keys(formGroup.controls)) {
    switch (key) {
      case "year":
        data[key] = ((formGroup.controls[key]).value as unknown as Date).getFullYear();
        break;

      case "date":
        data[key] = ((formGroup.controls[key]).value as unknown as Date).toISOString();
        break;

      default:
        data[key] = formGroup.controls[key].value || '';
        break;
    }
  }
  return data;
}
