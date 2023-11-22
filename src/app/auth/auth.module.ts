import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './components/register/register.component';
import { Route, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';


const routes: Route[] = [
  {path: "", component: RegisterComponent}
]
@NgModule({
  declarations: [
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AuthModule { }
