import { Component , OnInit, Input, inject} from '@angular/core';
import { FormControl, ControlContainer, FormGroup } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import { AppDateAdapter } from '../date-adapter.service';

const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'YYYY',
    monthYearA11yLabel: 'YYYY',
  },
};

@Component({
  selector: 'app-year-picker',
  templateUrl: './year-picker.component.html',
  styleUrls: ['./year-picker.component.scss'],
  providers:[
    { provide: DateAdapter, useClass: AppDateAdapter, deps: [MAT_DATE_LOCALE] },

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS}
  ],
  viewProviders: [
    { provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf:true})}
  ]
})
export class YearPickerComponent implements OnInit {

  startDate = new Date();
  formControl = new FormControl(this.startDate);
  @Input({required:true}) label:string ="";
  @Input({required:true}) keyName : string = "";

  _parentContainer =inject(ControlContainer);

  get parentGroup(){
    return this._parentContainer.control as FormGroup;
  }

  ngOnInit(): void {
    this.parentGroup.addControl(this.keyName, this.formControl )
  }
  onYearSelected(event:Date, datepicker: MatDatepicker<any>) {
    this.startDate.setFullYear(event.getFullYear())
    this.parentGroup.controls[this.keyName].patchValue(this.startDate)
    datepicker.close();
  }
}