import { Component, Input, OnInit, inject } from '@angular/core';
import { ControlContainer, FormControl, FormGroup } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';


@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss'],
  viewProviders: [
    { provide: ControlContainer,
      useFactory: () => inject(ControlContainer, {skipSelf:true})}
  ]
})
export class DatePickerComponent implements OnInit {

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
}
