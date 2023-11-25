import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { SvgComponent } from './svg/svg.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { InputComponent } from './input/input.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MAT_DATE_LOCALE, MatNativeDateModule} from '@angular/material/core';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { YearPickerComponent } from './year-picker/year-picker.component';



@NgModule({
  declarations: [
    LayoutComponent,
    SvgComponent,
    InputComponent,
    DatePickerComponent,
    YearPickerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports:[
    LayoutComponent,
    SvgComponent,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    InputComponent,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    DatePickerComponent,
    YearPickerComponent
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-Gb'},
  ]
})
export class SharedModule { }
