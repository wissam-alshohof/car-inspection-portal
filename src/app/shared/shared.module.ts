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



@NgModule({
  declarations: [
    LayoutComponent,
    SvgComponent,
    InputComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  exports:[
    LayoutComponent,
    SvgComponent,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    InputComponent,
    MatIconModule
  ]
})
export class SharedModule { }
